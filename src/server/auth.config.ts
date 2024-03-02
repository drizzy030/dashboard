import type { NextAuthConfig } from "next-auth";
import Discord from "next-auth/providers/discord";
import { env } from "~/env";

/**
 * Options for NextAuth.js used to configure providers.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export default {
  providers: [
    Discord({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
} satisfies NextAuthConfig;
