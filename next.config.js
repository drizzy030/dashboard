/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
const { webpackPlugin: utwm } = require("unplugin-tailwindcss-mangle");
/** @type {import("next").NextConfig} */
const config = {
  webpack: (config) => {
    config.plugins.push(utwm());
    return config;
  },
};

export default config;
