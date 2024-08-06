/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images:{
    domains: ['s3-alpha-sig.figma.com']
  }
};

export default nextConfig;
