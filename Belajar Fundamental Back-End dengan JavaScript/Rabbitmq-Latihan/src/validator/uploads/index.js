import InvariantError from '../../exceptions/InvariantError.js';
import { ImageHeaderSchema } from './schema.js';

const UploadsValidator = {
  validateImageHeaders: headers => {
    const validationResult = ImageHeaderSchema.validate(headers);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  }
};

export default UploadsValidator;
