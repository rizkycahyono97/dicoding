import { server } from '@hapi/hapi';

export default {
  name: 'albums',
  version: '1.0.0',
  register: async (server, options) => {
    console.log('PLugin albums terdaftar');
  }
};
