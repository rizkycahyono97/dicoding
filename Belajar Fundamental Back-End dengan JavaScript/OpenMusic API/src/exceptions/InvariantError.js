class InvariantError extends Error {
  constructor(message) {
    super(message);
    this.message = 'InvariantError';
  }
}

export default InvariantError;
