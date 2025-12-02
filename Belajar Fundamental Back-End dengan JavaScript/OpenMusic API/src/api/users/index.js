import UsersHandler from './handler.js';
import routes from './routes.js';
import UsersService from '../../services/postgres/UsersService.js';
import UsersValidator from '../../validator/users/index.js';

export default {
  name: 'users',
  version: '1.0.0',
  register: async (server, options) => {
    const service = new UsersService();
    const handler = new UsersHandler(service, UsersValidator);

    server.route(routes(handler));
    console.log('PLugin users terdaftar');
  }
};
