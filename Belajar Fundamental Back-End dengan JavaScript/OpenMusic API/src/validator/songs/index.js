import InvariantError from '../../exceptions/InvariantError.js';
import SongPayloadSchema from './schema.js';

const SongValidator = {
  validateSongPayload: paylod => {
    const validationResult = SongPayloadSchema.validate(paylod);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  }
};

export default SongValidator;
