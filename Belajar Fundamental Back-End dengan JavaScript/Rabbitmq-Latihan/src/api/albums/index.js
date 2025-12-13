import AlbumsService from '../../services/postgres/AlbumsService.js';
import AlbumsHandler from '../../api/albums/handler.js';
import routes from './routes.js';
import AlbumValidator from '../../validator/albums/index.js';

export default {
  name: 'albums',
  version: '1.0.0',
  register: async (server, options) => {
    const service = new AlbumsService();
    const handler = new AlbumsHandler(service, AlbumValidator);
    server.route(routes(handler));

    console.log('PLugin albums terdaftar');
  }
};
