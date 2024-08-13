import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "media2.giphy.com",
      "media0.giphy.com",
      "media4.giphy.com",
      "media3.giphy.com",
      "media1.giphy.com",
    ],
  },
  
};

export default withNextIntl(nextConfig);
