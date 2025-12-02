import PostPlaylistPayloadSchema from './schema.js';
import InvariantError from '../../exceptions/InvariantError.js';

const PlaylistValidator = {
  validatePostPlaylistPayload: payload => {
    const validationResult = PostPlaylistPayloadSchema(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  }
};

export default PlaylistValidator;
