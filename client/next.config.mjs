import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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
      {
        protocol: "https",
        hostname: "api-nistrans.oncewebdesign.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "snc-portal.th.nissin-asia.com",
        port: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
