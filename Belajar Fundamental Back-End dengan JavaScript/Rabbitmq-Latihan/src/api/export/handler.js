class ExportHandler {
  constructor(service, validator) {
    this._service = service;
    this.validator = validator;
  }

  async postExportNotesHandler(request, h) {
    this._validator.validateExportNotesPayload(request.payload);

    const message = {
      userId: request.auth.credentials.id,
      targetEmail: request.payload.targetEmail
    };

    await this._service.sendMessage('export:notes', JSON.stringify(message));

    const response = h.response({
      status: 'success',
      message: 'Permintaan anda dalam antrian'
    });
    response.code(201);
    return response;
  }
}

export default ExportHandler;
