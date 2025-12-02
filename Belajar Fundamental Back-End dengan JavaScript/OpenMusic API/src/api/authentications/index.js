import AuthenticationsHandler from './handler.js';
import routes from './routes.js';

export default {
  name: 'authentications',
  version: '1.0.0',
  register: async (server, options) => {
    const { AuthenticationsService, UsersService, tokenManager, validator } =
      options;

    const authenticationsService = new AuthenticationsService();
    const usersService = new UsersService();

    const handler = new AuthenticationsHandler(
      authenticationsService,
      usersService,
      tokenManager,
      validator
    );

    server.route(routes(handler));
    console.log('Plugin authentications terdaftar');
  }
};
