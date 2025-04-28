const http = require('http');
const url = require('url');

const menus = [
  'Nasi Goreng',
  'Sate Kambing',
  'Nasi Boran',
  'Ayam Bakar',
  'Teh Tawar'
];
const MISSING = 3;

const server = http.createServer((req, res) => {
  const { pathName } = url.parse(req.url);
  let id = pathName.match(/^\/(\d+)$/);

  if (!id) {
    res.statusCode = 400;
    return void res.end();
  }

  id = Number(id[1]);

  if (id === MISSING) {
    res.statusCode = 404;
    return void res.end();
  }

  res.setHeader('Content-type', 'application/json');

  res.end(
    JSON.stringify({
      id,
      menu: menus[id % menus.length]
    })
  );
});

server.listen(process.env.PORT || 0, () => {
  const { port } = server.address();
  console.log(`Order service listening on localhost on port: ${port}`);
});
