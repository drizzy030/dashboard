import { TRPCError } from "@trpc/server";
import { Resend } from "resend";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
  ratelimit,
} from "~/server/api/trpc";
import { getBaseUrl } from "~/trpc/shared";

export const authRouter = createTRPCRouter({
  newVerification: protectedProcedure
    .input(z.object({ token: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const token = await ctx.db.verificationToken.findUnique({
        where: { token: input.token },
      });

      if (!token) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Token not found",
        });
      }

      const expired = new Date(token.expires) < new Date();

      if (expired) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Token expired",
        });
      }

      const user = await ctx.db.user.findUnique({
        where: { email: token.email },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Email / User does not exist",
        });
      }

      await ctx.db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
          email: token.email,
        },
      });

      await ctx.db.verificationToken.delete({
        where: { id: token.id },
      });

      return { success: "Email verified!" };
    }),

  sendVerificationEmail: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { success } = await ratelimit.sendVerificationEmail.limit(
        input.email,
      );

      if (!success)
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "Try again in 5 min",
        });

      const token = uuidv4();
      const expires = new Date(new Date().getTime() + 3600 * 1000);

      const existingToken = await ctx.db.verificationToken.findUnique({
        where: { email: input.email },
      });

      if (existingToken) {
        await ctx.db.verificationToken.delete({
          where: {
            id: existingToken.id,
          },
        });
      }

      await ctx.db.verificationToken.create({
        data: {
          email: input.email,
          token,
          expires,
        },
      });

      const confirmLink = `${getBaseUrl()}/auth/new-verification?token=${token}`;
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "info@drizzy.ch",
        to: input.email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
      });

      return { success: "Sent email" };
    }),
});
