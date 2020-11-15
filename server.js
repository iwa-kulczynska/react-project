const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  static: 'dist',
  noCors: true,
});
const port = process.env.PORT || 8080;

server.use(middlewares);
server.listen(port);