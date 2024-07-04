module.exports = {
    apps: [
      {
        name: 'nuxt-app',
        script: '/apps/www/html/3three.io/nuxt/.output/server/index.mjs',
        watch: true,
        env: {
          NODE_ENV: 'production',
        },
      },
      {
        name: 'nowui-app',
        script: '/apps/www/html/3three.io/nowui/.output/server/index.mjs',
        watch: true,
        env: {
          NODE_ENV: 'production',
        },
      },
      {
        name: 'nuxt-proxy',
        script: '/apps/www/html/3three.io/nuxt/server.mjs',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
      },
      {
        name: 'nowui-proxy',
        script: '/apps/www/html/3three.io/nowui/server.mjs',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
      },
      {
        name: 'laravel-backend',
        script: 'php',
        args: '-S localhost:8000 -t /apps/www/html/3three.io/laravel/public',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  