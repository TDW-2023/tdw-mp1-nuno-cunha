/** @type {import('next').NextConfig} */
require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/",
  publicRuntimeConfig: {
    SPACE: process.env.SPACE,
    ACCESSTOKEN: process.env.ACCESSTOKEN,
  },
};
