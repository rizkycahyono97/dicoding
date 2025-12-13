import pg from 'pg';
import { nanoid } from 'nanoid';
import InvariantError from '../../exceptions/InvariantError.js';
import NotFoundError from '../../exceptions/NotFoundError.js';
import AuthorizationError from '../../exceptions/AuthorizationError.js';

const { Pool } = pg;

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async addPlaylist({ name, owner }) {
    const id = `playlist-${nanoid(16)}`;
    const query = {
      text: 'INSERT INTO playlist VALUES($1, $2, $3) RETURNING id',
      values: [id, name, owner]
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new InvariantError('Playlist gagal ditambahkan');
    }

    return result.rows[0].id;
  }

  async getPlaylists(owner) {
    const query = {
      text: `SELECT playlist.id, playlist.name, users.username
        FROM playlist
        LEFT JOIN users ON users.id = playlist.owner
        WHERE playlist.owner = $1
      `,
      values: [owner]
    };

    const result = await this._pool.query(query);
    return result.rows;
  }

  async deletePlaylistById(id) {
    const query = {
      text: 'DELETE FROM playlist WHERE id = $1 RETURNING id',
      values: [id]
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Playlist gagal dihapus, ID tidak ditemukan');
    }
  }

  async verifyPlaylistOwner(id, owner) {
    const query = {
      text: 'SELECT * FROM playlist WHERE id = $1',
      values: [id]
    };

    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('Playlist tidak ditemukan');
    }

    // authorization
    const playlist = result.rows[0];
    if (playlist.owner !== owner) {
      throw new AuthorizationError('Anda tidak berhak mengakses playlist ini');
    }
  }

  async addSongToPlaylist(playlistId, songId, userId) {
    const id = `playlist-song-${nanoid(16)}`;
    const query = {
      text: 'INSERT INTO playlist_songs VALUES($1, $2, $3) RETURNING id',
      values: [id, playlistId, songId]
    };
    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new InvariantError('Lagu gagal ditambahkan ke playlist');
    }
    await this.addActivity(playlistId, songId, userId, 'add');
  }

  async getSongsFromPlaylist(playlistId) {
    const query = {
      text: `SELECT playlist.id, playlist.name, songs.id as song_id, songs.title, songs.performer
        FROM playlist
        JOIN users ON playlist.owner = users.id
        JOIN playlist_songs ON playlist_songs.playlist_id = playlist.id
        JOIN songs ON playlist_songs.song_id = songs.id
        WHERE playlist.id = $1
      `,
      values: [playlistId]
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async getPlaylistWithSongs(playlistId) {
    const queryPlaylist = {
      text: `SELECT playlist.id, playlist.name, users.username
             FROM playlist
             JOIN users ON playlist.owner = users.id
             WHERE playlist.id = $1`,
      values: [playlistId]
    };
    const resultPlaylist = await this._pool.query(queryPlaylist);

    if (!resultPlaylist.rows.length) {
      throw new NotFoundError('Playlist tidak ditemukan');
    }

    const playlist = resultPlaylist.rows[0];

    const querySongs = {
      text: `SELECT songs.id, songs.title, songs.performer
             FROM songs
             JOIN playlist_songs ON songs.id = playlist_songs.song_id
             WHERE playlist_songs.playlist_id = $1`,
      values: [playlistId]
    };
    const resultSongs = await this._pool.query(querySongs);

    return {
      ...playlist,
      songs: resultSongs.rows
    };
  }

  async deleteSongFromPlaylist(playlistId, songId, userId) {
    const query = {
      text: 'DELETE FROM playlist_songs WHERE playlist_id = $1 AND song_id = $2 RETURNING id',
      values: [playlistId, songId]
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new InvariantError('Lagu gagal ditambahkan');
    }

    await this.addActivity(playlistId, songId, userId, 'add');
  }

  async verifySongExistence(songId) {
    const query = {
      text: 'SELECT id FROM songs WHERE id = $1',
      values: [songId]
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Lagu tidak ditemukan');
    }
  }

  async addActivity(playlistId, songId, userId, action) {
    const id = `activity-${nanoid(16)}`;
    const time = new Date().toISOString();
    const query = {
      text: 'INSERT INTO playlist_song_activities VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, playlistId, songId, userId, action, time]
    };

    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new InvariantError('Activitas gagal dicatat');
    }
  }

  async getPlaylistActivities(playlistId) {
    const query = {
      text: `
      SELECT users.username, songs.title, activities.action, activities.time
      FROM playlist_song_activities activities
      JOIN users ON users.id = activities.user_id
      JOIN songs ON songs.id = activities.song_id
      WHERE activities.playlist_id = $1
      ORDER BY activities.time ASC
    `,
      values: [playlistId]
    };

    const result = await this._pool.query(query);
    return result.rows;
  }
}

export default PlaylistsService;
