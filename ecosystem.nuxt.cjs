module.exports = {
  apps: [
    {
      name: 'hartha-frontend',
      script: '.output/server/index.mjs',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
        NITRO_PORT: 3001,
        NITRO_HOST: '0.0.0.0',
      },
    },
  ],
}