import {
  PostPlaylistPayloadSchema,
  PostPlaylistSongPayloadSchema,
  DeletePlaylistSongPayloadSchema
} from './schema.js';
import InvariantError from '../../exceptions/InvariantError.js';

const PlaylistValidator = {
  validatePostPlaylistPayload: payload => {
    const validationResult = PostPlaylistPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePostPlaylistSongPayload: payload => {
    const validationResult = PostPlaylistSongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateDeletePlaylistSongPayload: payload => {
    const validationResult = DeletePlaylistSongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  }
};

export default PlaylistValidator;
