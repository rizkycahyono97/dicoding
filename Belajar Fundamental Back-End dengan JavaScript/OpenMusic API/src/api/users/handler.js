class UsersHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postUserHandler = this.postUserHandler.bind(this);
  }

  async postUserHandler(request, h) {
    try {
      this._validator.validateUserPayload(request.payload);
      const { username, password, fullname } = request.payload;

      const userId = await this._service.addUser({
        username,
        password,
        fullname
      });

      const response = h.response({
        status: 'success',
        message: 'User berhasil ditambahkan',
        data: {
          userId
        }
      });
      response.code(201);
      return response;
    } catch (error) {
      console.error('ERROR users handler ', error);
      throw error;
    }
  }
}

export default UsersHandler;
