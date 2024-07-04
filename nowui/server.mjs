import { createServer } from 'http';
import { parse } from 'url';
import { loadNuxt, build } from 'nuxt';
import { createProxyMiddleware } from 'http-proxy-middleware';
import consola from 'consola';

const isDev = process.env.NODE_ENV !== 'production';

async function start() {
  const nuxt = await loadNuxt(isDev ? { overrides: { dev: true } } : { overrides: { dev: false } });

  if (isDev) {
    await build(nuxt);
  }

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    // Proxy API requests
    if (req.url.startsWith('/v2/')) {
      createProxyMiddleware({
        target: isDev ? 'http://localhost:8000' : 'http://13.237.139.178:8000',
        changeOrigin: true,
        pathRewrite: { '^/v2/': '/' },
        onProxyReq: (proxyReq) => {
          proxyReq.setHeader('origin', isDev ? 'http://localhost:3003' : 'http://13.237.139.178:3003');
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
      message: `Server listening on ${isDev ? 'http://localhost:3004' : 'http://13.237.139.178:3004'}`,
      badge: true,
    });
  });
}

start().catch((error) => {
  consola.error('Error starting server:', error);
  process.exit(1);
});
