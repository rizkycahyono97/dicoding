const routes = handler => [
  {
    method: 'POST',
    path: '/albums',
    handler: handler.postAlbumHandler
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handler.getAlbumByIdHandler
  },
  {
    method: 'PUT',
    path: '/album/{id}',
    handler: handler.putAlbumByIdHandler
  },
  {
    method: 'DELETE',
    path: '/album/{id}',
    handler: handler.deleteAlbumByIdHandler
  }
];

export default routes;
