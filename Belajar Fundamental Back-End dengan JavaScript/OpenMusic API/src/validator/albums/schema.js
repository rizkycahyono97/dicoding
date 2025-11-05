const Joi = require('joi');

const AlbumPyloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required()
});

module.exports = { AlbumPyloadSchema };
