import ClientError from './ClientError.js';

class InvariantError extends ClientError {
  constructor(message) {
    super(message, 400);
    this.message = 'InvariantError';
  }
}

export default InvariantError;
