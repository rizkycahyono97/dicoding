const routes = handler => [
  {
    method: 'POST',
    path: '/export/notes',
    handler: handler.postExportNotesHandler,
    options: {
      auth: 'notesapp_jwt'
    }
  }
];

export default routes;
