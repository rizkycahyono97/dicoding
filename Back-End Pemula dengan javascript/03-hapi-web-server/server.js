const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  // server
  const server = hapi.server({
    port: 5000,
    host: 'localhost'
  });

  // routing
  server.route(routes)

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
