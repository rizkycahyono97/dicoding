import Joi from 'joi';

const PostPlaylistPayloadSchema = Joi.object({
  name: Joi.string().required()
});

export default PostPlaylistPayloadSchema;
