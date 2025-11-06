import dotenv from 'dotenv';
import Hapi from '@hapi/hapi';
import albums from './services/albums/index.js';
import songs from './services/songs/index.js';

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
      plugin: albums
    },
    {
      plugin: songs
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
