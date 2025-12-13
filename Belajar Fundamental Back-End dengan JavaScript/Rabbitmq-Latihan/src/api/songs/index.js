import SongService from '../../services/postgres/SongsService.js';
import SongsHandler from '../../api/songs/handler.js';
import routes from './routes.js';
import SongValidator from '../../validator/songs/index.js';

export default {
  name: 'songs',
  version: '1.0.0',
  register: async (server, options) => {
    const service = new SongService();
    const handler = new SongsHandler(service, SongValidator);

    server.route(routes(handler));
    console.log('Plugin songs terdaftar');
  }
};
