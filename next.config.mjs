/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://dejavu.lifestyle",
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
