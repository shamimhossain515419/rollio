/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://127.0.0.1:8000",
    GROUP_ID: "4",
  },
  // https://dejavu.lifestyle
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
