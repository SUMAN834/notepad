const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
  runtimeCaching,
});

module.exports = withPWA({
  reactStrictMode: true,
});
