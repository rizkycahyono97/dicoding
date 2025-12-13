import ExportHandler from './handler';

export default {
  name: 'exports',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const handler = new ExportHandler(service, validator);
    server.route(routes(handler));
    console.log('Plugin export terdaftar');
  }
};
