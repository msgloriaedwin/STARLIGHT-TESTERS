module.exports = {
  apps: [
    {
      name: 'bingo-staging',
      script: '.next/standalone/server.js', // Path to the Next.js server.js
      instances: 1,
      env: {
        NODE_ENV: 'development',
        PORT: 6001,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        GIF_API_KEY: process.env.GIF_API_KEY,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 6001,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        GIF_API_KEY: process.env.GIF_API_KEY,
      }
    }
  ]
};
