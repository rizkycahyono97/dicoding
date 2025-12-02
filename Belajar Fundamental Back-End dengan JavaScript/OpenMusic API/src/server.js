import dotenv from 'dotenv';
import Hapi from '@hapi/hapi';
import Jwt from '@hapi/jwt';

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

// authentication
import authentications from './api/authentications/index.js';
import AuthenticationsService from './services/postgres/AuthenticationsService.js';
import TokenManager from './tokenize/TokenManager.js';
import AuthenticationsValidator from './validator/authentications/index.js';

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

  // external plugin
  await server.register([
    {
      plugin: Jwt
    }
  ]);

  // jwt auth
  server.auth.strategy('openmusic_jwt', 'jwt', {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE
    },
    validate: artifacts => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.id
      }
    })
  });

  // plugin sendiri
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
    },
    {
      plugin: authentications,
      options: {
        AuthenticationsService,
        UsersService,
        tokenManager: TokenManager,
        validator: AuthenticationsValidator
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
