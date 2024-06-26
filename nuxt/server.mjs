import { createServer } from 'http';
import { parse } from 'url';
import { loadNuxt, build } from 'nuxt';
import { createProxyMiddleware } from 'http-proxy-middleware';

const isDev = process.env.NODE_ENV !== 'production';

async function start() {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start');

  if (isDev) {
    build(nuxt);
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
          proxyReq.setHeader('origin', 'http://localhost:3001');
        },
        onError: (err, req, res) => {
          console.error('Proxy error:', err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Something went wrong.');
        },
      })(req, res);
    } else {
      nuxt.render(req, res, parsedUrl);
    }
  });

  server.listen(3002, '0.0.0.0', () => {
    console.log('Server listening on http://localhost:3002');
  });
}

start();
