import { allow, options } from 'joi';

const routes = handler => [
  {
    method: 'POST',
    path: '/upload/images',
    handler: handler.postUploadImageHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: allow,
        output: 'stream'
      }
    }
  }
];

export default routes;
