// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'bingo-staging',
      script: './node_modules/.bin/next', // Path to the Next.js executable
      args: 'start -p 6001', // Start Next.js on port 6001
      env: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        GIF_API_KEY: process.env.GIF_API_KEY,
      },
    },
  ],
};
