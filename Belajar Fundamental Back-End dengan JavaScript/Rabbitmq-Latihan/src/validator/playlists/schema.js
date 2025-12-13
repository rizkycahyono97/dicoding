import Joi from 'joi';

export const PostPlaylistPayloadSchema = Joi.object({
  name: Joi.string().required()
});

export const PostPlaylistSongPayloadSchema = Joi.object({
  songId: Joi.string().required()
});

export const DeletePlaylistSongPayloadSchema = Joi.object({
  songId: Joi.string().required()
});
