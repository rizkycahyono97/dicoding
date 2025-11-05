class NotFoundError extends Error {
  constructor(message) {
    super(message, 404);
    this.message = 'NotFoundError';
  }
}

export default NotFoundError;
