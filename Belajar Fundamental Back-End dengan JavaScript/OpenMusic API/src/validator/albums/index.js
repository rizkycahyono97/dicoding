import { AlbumPyloadSchema } from './schema';
import InvariantError from '../../exceptions/InvariantError.js';

const AlbumValidator = {
  validateAlbumPayload: payload => {
    const validationResult = AlbumPyloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  }
};

export default AlbumValidator;
