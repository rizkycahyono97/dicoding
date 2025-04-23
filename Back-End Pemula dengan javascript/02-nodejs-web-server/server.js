const http = require('http');
const getRequestBody = require('./helper/body');

const requestListener = async (request, response) => {
  response.setHeader('Content-Type', 'applicaction/json');
  response.setHeader('Powered-By', 'Node.js')

  response.statusCode = 200;

  // const method = request.method // sama saja seperti ini
  const { method, url } = request;

  if (url === '/') {
    if (method === 'GET') {
      response.statusCode = 200
      response.end(`<h1>Ini adalah homepage</h1>`);
    } else {
      response.statusCode = 400
      response.end(`Halaman tidak dapat diakses dengan ${method} request`)
    }
  } else if (url === '/about') {
    if (method === 'GET') {
      response.end(`<h1>Halo ini adalah halaman about</h1>`);
    } else if (method === 'POST') {
      const body = await getRequestBody(request);

      if (!body) {
        response.statusCode = 400;
        return response.end('<h1>Body Kosong</h1>');
      }

      try {
        const { name } = JSON.parse(body);
        response.end(`<h1>Halo, ${name} ini adalah halaman about</h1>`);
      } catch (e) {
        response.statusCode = 400;
        response.end('<h1>Format JSON tidak valid</h1>');
      }
    } else {
      response.statusCode = 400
      response.end(`Tidak bisa diakses dengan ${method} request`)
    }
  } else {
    response.statusCode = 404;
    response.end('Halaman tidak ditemukan!');
  }
};

const server = http.createServer(requestListener);

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
