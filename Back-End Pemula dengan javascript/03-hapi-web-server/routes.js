const routes = [
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}`;
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    }
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About Page';
    }
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return 'Halaman tidak bisa diakses dengan method';
    }
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'stranger' } = request.params;

      const { lang } = request.query;

      if (lang === 'id') {
        return `Hai ${name}`;
      }

      return `Hello ${name}`;
    }
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Halaman tidak ditemukan';
    }
  }
];

module.exports = routes;
