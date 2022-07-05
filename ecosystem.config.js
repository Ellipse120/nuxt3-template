module.exports = {
  apps: [
    {
      name: 'tufang',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
