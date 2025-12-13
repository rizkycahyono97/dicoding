import PlaylistsService from '../../services/postgres/PlaylistsService.js';
import PlaylistsHandler from './handler.js';
import PlaylistValidator from '../../validator/playlists/index.js';
import routes from './routes.js';

export default {
  name: 'playlists',
  version: '1.0.0',
  register: async (server, options) => {
    const service = new PlaylistsService();
    const handler = new PlaylistsHandler(service, PlaylistValidator);

    server.route(routes(handler));
    console.log('Plugin playlist terdaftar');
  }
};
