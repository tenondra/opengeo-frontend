// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json');
const target = process.env.REACT_APP_PROXY || pkg.proxy;

module.exports = app =>
  target &&
  app.use(
    '/maps',
    createProxyMiddleware({
      target: target,
      changeOrigin: true,
    })
  );
