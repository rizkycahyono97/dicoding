import PostPlaylistPayloadSchema from './schema.js';
import InvariantError from '../../exceptions/InvariantError.js';

const PlaylistValidator = {
  validatePostPlaylistPayload: payload => {
    const validationResult = PostPlaylistPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  }
};

export default PlaylistValidator;
