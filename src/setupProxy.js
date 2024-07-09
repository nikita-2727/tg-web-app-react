const { createProxyMiddleware } = require('http-proxy-middleware');
import { HOST_SERVER_API } from './env';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: HOST_SERVER_API,
      changeOrigin: true,
    })
  );
};