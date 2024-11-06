/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "at-once.info",
        port: "",
      },
      {
        protocol: "http",
        hostname: "api.ymc.z251768-el8ce.ps02.zwhhosting.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3001",
      },
      {
        protocol: "http",
        hostname: "192.168.0.199",
        port: "3001",
      },
    ],
  },
};

export default nextConfig;
