import dotenv from 'dotenv';
import Hapi from '@hapi/hapi';

// album
import AlbumsService from './services/postgres/AlbumsService.js';
import albums from './api/albums/index.js';
import AlbumValidator from './validator/albums/index.js';

// song
import SongsService from './services/postgres/SongsService.js';
import songs from './api/songs/index.js';
import SongValidator from './validator/songs/index.js';

// users
import users from './api/users/index.js';
import UsersService from './services/postgres/UsersService.js';
import UsersValidator from './validator/users/index.js';

// error
import ClientError from './exceptions/ClientError.js';

dotenv.config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  await server.register([
    {
      plugin: albums,
      options: {
        service: AlbumsService,
        validator: AlbumValidator
      }
    },
    {
      plugin: songs,
      options: {
        service: SongsService,
        validator: SongValidator
      }
    },
    {
      plugin: users,
      options: {
        service: UsersService,
        validator: UsersValidator
      }
    }
  ]);

  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    if (response instanceof ClientError) {
      const newResponse = h.response({
        status: 'fail',
        message: response.message
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    if (!response.isServer) {
      return h.continue;
    }

    const newResponse = h.response({
      status: 'error',
      message: 'terjadi kegagalan pada server kami'
    });
    newResponse.code(500);
    return newResponse;
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});

init();
