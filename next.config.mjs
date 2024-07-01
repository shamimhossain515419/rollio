/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://dejavu.lifestyle",
    GROUP_ID: "4",
  },
  images: {
    domains: [
      "cdn.shopify.com",
      "flagcdn.com",
      "www.rollienation.com",
      "cld.accentuate.io",
      "cdn-images.farfetch-contents.com",
      "getmicrojobs.com",
      "dejavu.lifestyle",
    ],
  },
};

export default nextConfig;
