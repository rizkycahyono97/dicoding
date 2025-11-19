const ClientError = require('./ClientError');

class AuthorizationError extends Error {
  constructor(message) {
    super(message, 403);
    this.name = 'AuthorizationError';
  }
}

module.exports = AuthorizationError;
