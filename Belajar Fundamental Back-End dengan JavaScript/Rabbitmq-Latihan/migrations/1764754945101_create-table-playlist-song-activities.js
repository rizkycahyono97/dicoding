/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = pgm => {
  pgm.createTable('playlist_song_activities', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true
    },
    playlist_id: {
      type: 'VARCHAR(50)',
      notNull: true
    },
    song_id: {
      type: 'VARCHAR(50)',
      notNull: true
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true
    },
    action: {
      type: 'VARCHAR(10)',
      action: true
    },
    time: {
      type: 'TIMESTAMP',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });

  pgm.addConstraint(
    'playlist_song_activities',
    'fk_playlist_song_activities.playlist_id_playlists',
    'FOREIGN KEY(playlist_id) REFERENCES playlist(id) ON DELETE CASCADE'
  );

  pgm.addConstraint(
    'playlist_song_activities',
    'fk_playlist_song_activities.user_id_users.id',
    'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE'
  );
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = pgm => {
  pgm.dropConstraint(
    'playlist_song_activities',
    'fk_playlist_song_activities.playlist_id_playlists'
  );
  pgm.dropConstraint(
    'playlist_song_activities',
    'fk_playlist_song_activities.user_id_users.id'
  );
  pgm.dropTable('playlist_song_activities');
};
