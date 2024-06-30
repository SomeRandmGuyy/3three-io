import { createServer } from 'http';
import { parse } from 'url';
import { loadNuxt, build } from 'nuxt';
import { createProxyMiddleware } from 'http-proxy-middleware'; // Ensure correct import
import consola from 'consola';

const isDev = process.env.NODE_ENV !== 'production';

async function start() {
  const nuxt = await loadNuxt({
    rootDir: process.cwd(),
    overrides: {
      dev: isDev,
    },
  });

  if (isDev) {
    await build(nuxt);
  }

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    // Proxy API requests
    if (req.url.startsWith('/v2/')) {
      createProxyMiddleware({
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: { '^/v2/': '/' },
        onProxyReq: (proxyReq) => {
          proxyReq.setHeader('origin', 'http://localhost:3003');
        },
        onError: (err, req, res) => {
          consola.error('Proxy error:', err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Something went wrong.');
        },
      })(req, res);
    } else {
      nuxt.render(req, res, parsedUrl);
    }
  });

  server.listen(3004, '0.0.0.0', () => {
    consola.ready({
      message: 'Server listening on http://localhost:3004',
      badge: true,
    });
  });
}

start().catch((error) => {
  consola.error('Error starting server:', error);
  process.exit(1);
});
