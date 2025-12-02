import dotenv from 'dotenv';
import Hapi from '@hapi/hapi';
import AlbumsService from './services/postgres/AlbumsService.js';
import SongsService from './services/postgres/SongsService.js';
import albums from './api/albums/index.js';
import AlbumValidator from './validator/albums/index.js';
import songs from './api/songs/index.js';
import SongValidator from './validator/songs/index.js';

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
    }
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});

init();
