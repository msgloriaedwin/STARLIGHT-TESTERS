module.exports = {
  apps: [
    {
      name: "bingofe-staging",
      script: "pnpm",
      args: "start",
      env: {
        PORT: 6001
      },
      env_production: {
        PORT: 6001
      }
    }
  ]
};
