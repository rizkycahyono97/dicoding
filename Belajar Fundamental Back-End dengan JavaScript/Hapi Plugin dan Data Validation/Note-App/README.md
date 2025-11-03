# 📚 Bookshelf API

Bookshelf API adalah sebuah RESTful API sederhana yang memungkinkan pengguna untuk menambah, melihat, mengubah, dan menghapus data buku. API ini dibuat sebagai bagian dari submission kelas **Belajar Membuat Aplikasi Back-End untuk Pemula** oleh [Dicoding Indonesia](https://www.dicoding.com/).

## 🚀 Fitur Utama

- Menambahkan buku baru
- Menampilkan seluruh buku (dengan dukungan query parameter)
- Menampilkan detail buku berdasarkan ID
- Mengubah data buku berdasarkan ID
- Menghapus buku berdasarkan ID

---

## 🛠️ Teknologi

- **Node.js**
- **Hapi.js** – HTTP server framework
- **nanoid** – Untuk menghasilkan ID unik
- **ESLint** – Untuk menjaga konsistensi gaya penulisan kode (menggunakan style guide)

---

## 📦 Instalasi

```bash
git clone https://github.com/username/bookshelf-api.git
cd bookshelf-api
npm install
```

---

## ▶️ Menjalankan Server

### Development:
```bash
npm run dev
```

### Production:
```bash
npm start
```

Server akan berjalan di:
```
http://localhost:9000
```

---

## 📘 Dokumentasi Endpoint

### 1. Tambah Buku

**POST** `/books`

#### Body:
```json
{
  "name": "Buku A",
  "year": 2021,
  "author": "Jane Doe",
  "summary": "Buku bagus",
  "publisher": "Dicoding",
  "pageCount": 100,
  "readPage": 25,
  "reading": true
}
```

#### Response (201):
```json
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "abc123"
  }
}
```

---

### 2. Lihat Semua Buku

**GET** `/books`

#### Query Parameter (opsional):

- `name`: cari berdasarkan nama
- `reading`: 1 (sedang dibaca), 0 (tidak)
- `finished`: 1 (selesai dibaca), 0 (belum)

#### Response (200):
```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "abc123",
        "name": "Buku A",
        "publisher": "Dicoding"
      }
    ]
  }
}
```

---

### 3. Lihat Detail Buku

**GET** `/books/{bookId}`

#### Response (200):
```json
{
  "status": "success",
  "data": {
    "book": {
      "id": "abc123",
      "name": "Buku A",
      "year": 2021,
      "author": "Jane Doe",
      "summary": "Buku bagus",
      "publisher": "Dicoding",
      "pageCount": 100,
      "readPage": 25,
      "finished": false,
      "reading": true,
      "insertedAt": "...",
      "updatedAt": "..."
    }
  }
}
```

#### Bila ID tidak ditemukan (404):
```json
{
  "status": "fail",
  "message": "Buku tidak ditemukan"
}
```

---

### 4. Ubah Buku

**PUT** `/books/{bookId}`

#### Body: *(sama seperti POST)*

#### Response (200):
```json
{
  "status": "success",
  "message": "Buku berhasil diperbarui"
}
```

#### Validasi Gagal:
- Tanpa `name`: 400
- `readPage > pageCount`: 400
- ID tidak ditemukan: 404

---

### 5. Hapus Buku

**DELETE** `/books/{bookId}`

#### Response (200):
```json
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```

#### Bila ID tidak ditemukan (404):
```json
{
  "status": "fail",
  "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```

---

## 🧪 Testing

Gunakan **Postman** untuk menguji setiap endpoint API.

### Langkah-langkah:

1. Ekstrak file ZIP `test/BookshelfAPITestCollectionAndEnvironment.zip`.
2. Di dalam Postman, impor kedua file berikut:
   - File Collection (`BookshelfAPITestCollection.postman_collection.json`)
   - File Environment (`BookshelfAPIEnvironment.postman_environment.json`)
3. Pilih environment `BookshelfAPIEnvironment` di Postman sebelum menjalankan pengujian.
4. Jalankan setiap request atau gunakan fitur **Collection Runner** untuk menguji seluruh endpoint secara otomatis.

> Pastikan server API kamu berjalan di `http://localhost:9000` atau sesuaikan dengan environment.


---

## ✅ Code Quality

Gunakan ESLint untuk memastikan tidak ada error dan konsistensi gaya penulisan:

```bash
npx eslint .
```

Pastikan tidak ada error sebelum melakukan deployment atau pengumpulan submission.

---

## 📄 Lisensi

Proyek ini dibuat untuk kebutuhan pembelajaran dan latihan dari kelas Dicoding dan bebas digunakan untuk edukasi