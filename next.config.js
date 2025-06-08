const withFlowbiteReact = require("flowbite-react/plugin/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "www.kfcpakistan.com",
      "static.kfc.com",
      "encrypted-tbn0.gstatic.com",
      // add any other domains you use for images
    ],
  },
};

module.exports = withFlowbiteReact(nextConfig);
