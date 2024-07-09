const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://77.222.38.197:3001/',
      changeOrigin: true,
    })
  );
};