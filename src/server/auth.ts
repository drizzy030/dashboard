import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "~/server//auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { Product, UserRole } from "@prisma/client";
import { db } from "~/server/db";
import { api } from "~/trpc/server";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      // ...other properties
      role: UserRole;
      isOAuth: boolean;
      emailVerified: Date | null;
      createdAt: Date;
      products: Product[];
    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    role: UserRole;
    isOAuth: boolean;
    createdAt: Date;
    emailVerified: Date | null;
    products: Product[];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user.emailVerified) return true;

      if (!user.emailVerified) {
        await api.auth.sendVerificationEmail.mutate({
          email: user.email!,
        });
      }
      return true;
    },
    async session({ session, user, token, newSession, trigger }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          role: token.role as UserRole,
          isOAuth: token.isOAuth as boolean,
          emailVerified: token.emailVerified as Date | null,
          createdAt: token.createdAt as Date,
          products: token.products as Product[],
        },
      };
    },

    async jwt({ token, profile, session, trigger, isNewUser }) {
      if (!token.sub) return token;

      const user = await db.user.findUnique({
        where: { id: token.sub },
      });

      if (!user) return token;

      const account = await db.account.findFirst({
        where: { userId: user.id },
      });

      const products = await db.product.findMany({
        where: { userId: user.id },
      });

      return {
        ...token,
        isOAuth: !!account,
        role: user.role,
        emailVerified: user.emailVerified,
        createdAt: user.createdAt,
        products,
      };
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
