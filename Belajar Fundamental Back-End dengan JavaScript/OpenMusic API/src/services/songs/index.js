import SongsService from './service.js';
import SongsHandler from './handler.js';
import routes from './routes.js';
import SongValidator from '../../validator/songs/index.js';
import { version } from 'joi';

export default {
  name: 'songs',
  version: '1.0.0',
  register: async (server, options) => {
    const service = new SongsService();
    const handler = new SongsHandler(service, SongValidator);

    server.route(routes(handler));
  }
};
