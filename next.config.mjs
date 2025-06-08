import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'cdn.jsdelivr.net',
      'cdn-icons-png.flaticon.com',
      'www.kfcpakistan.com',
      'upload.wikimedia.org'
    ],
  },
};

export default withFlowbiteReact(nextConfig);