const { nanoid } = require('nanoid');
const notes = require('./notes');

// create note
const addNoteHandler = (request, h) => {
  // Menerima Data dari Client
  const { title, tags, body } = request.payload; // mendapatkan body json dari request

  // Membuat Data Catatan Baru
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updateAt = createdAt;

  //masukan ke dalam array notes
  const newNote = {
    title,
    tags,
    body,
    id,
    updateAt
  };
  notes.push(newNote);

  // cek apakah penyimpanan berhasil
  const isSuccess = notes.filter(note => note.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan Berhasil ditambahkan',
      data: {
        noteId: id
      }
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan Gagal Ditambahkan'
  });
  response.code(500);
  return response;
};

// get all notes
const getAllNoteHandler = () => ({
  status: 'success',
  data: {
    notes
  }
});

// get note by id
const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const note = notes.filter(n => n.id === id)[0]; //mencari id yang sama dengan id yang dikirim

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note
      }
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan'
  });
  response.code(404);

  return response;
};

// edit notes by id
const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const { title, tags, body } = request.payload;
  const updateAt = new Date().toISOString();

  const index = notes.findIndex(note => note.id === id); //Cari posisi data di array notes

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updateAt
    };
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil di perbarui'
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal mengedit catatan, id tidak ditemukan'
  });
  response.code(404);
  return response;
};

const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex(note => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil dihapus'
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Catatan gagal dihapus, id tidak ditemukan'
  });
  response.code(404);
  return response;
};

module.exports = {
  addNoteHandler,
  getAllNoteHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
