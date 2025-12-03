import autoBind from 'auto-bind';

class PlaylistsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postPlaylistHandler(request, h) {
    try {
      this._validator.validatePostPlaylistPayload(request.payload);
      const { name } = request.payload;
      const { id: credentialId } = request.auth.credentials; //ambil id user dari token

      const playlistId = await this._service.addPlaylist({
        name,
        owner: credentialId
      });

      const response = h.response({
        status: 'success',
        message: 'Playlist berhasil ditambahkan',
        data: {
          playlistId
        }
      });
      response.code(201);
      return response;
    } catch (error) {
      console.error('postPlaylistHandler', error);
      throw error;
    }
  }

  async getPlaylistHandler(request) {
    const { id: credentialId } = request.auth.credentials;
    const playlists = await this._service.getPlaylists(credentialId);

    return {
      status: 'success',
      data: {
        playlists
      }
    };
  }

  async deletePlaylistByIdHandler(request) {
    const { id } = request.params;
    const { id: credentialId } = request.auth.credentials;

    await this._service.verifyPlaylistOwner(id, credentialId);
    await this._service.deletePlaylistById(id);

    return {
      status: 'success',
      message: 'playlist berhasil di hapus'
    };
  }

  async postSongToPlaylistHandler(request, h) {
    this._validator.validatePostPlaylistSongPayload(request.payload);

    const { id: playlistId } = request.params;
    const { songId } = request.payload;
    const { id: credentialId } = request.auth.credentials;

    await this._service.verifyPlaylistOwner(playlistId, credentialId);
    await this._service.verifySongExistence(songId);
    await this._service.addSongToPlaylist(playlistId, songId, credentialId);

    const response = h.response({
      status: 'success',
      message: 'Lagu berhasil ditambahkan di playlist'
    });
    response.code(201);
    return response;
  }

  async getSongsFromPlaylistHandler(request) {
    const { id: playlistId } = request.params;
    const { id: credentialId } = request.auth.credentials;

    await this._service.verifyPlaylistOwner(playlistId, credentialId);

    // raw
    const playlistRaw = await this._service.getSongsFromPlaylist(playlistId);

    const playlist = await this._service.getPlaylistWithSongs(playlistId);

    return {
      status: 'success',
      data: {
        playlist
      }
    };
  }

  async deleteSongFromPlaylistHandler(request) {
    this._validator.validateDeletePlaylistSongPayload(request.payload);

    const { id: playlistId } = request.params;
    const { songId } = request.payload;
    const { id: credentialId } = request.auth.credentials;

    await this._service.verifyPlaylistOwner(playlistId, credentialId);
    await this._service.deleteSongFromPlaylist(
      playlistId,
      songId,
      credentialId
    );

    return {
      status: 'success',
      message: 'Lagu di playlist berhasil dihapus'
    };
  }

  async getPlaylistActivitiesHandler(request) {
    try {
      const { id: playlistId } = request.params;
      const { id: credentialId } = request.auth.credentials;

      await this._service.verifyPlaylistOwner(playlistId, credentialId);

      const activities = await this._service.getPlaylistActivities(playlistId);

      return {
        status: 'success',
        data: {
          playlistId,
          activities
        }
      };
    } catch (error) {
      console.error('getPlaylistActivitiesHandler', error);
      throw error;
    }
  }
}

export default PlaylistsHandler;
