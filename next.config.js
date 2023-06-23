/** @type {import('next').NextConfig} */
const nextConfig = {};
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssModules: true,
});

module.exports = nextConfig;
