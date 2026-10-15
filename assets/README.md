# Folder Assets

Letakkan berkas pendukung di folder ini.

## Foto profil

Simpan foto dengan nama misalnya `foto-profil.jpg` (disarankan rasio 1:1, minimal 400×400 px),
lalu daftarkan di `js/data.js`:

```js
foto: "assets/foto-profil.jpg",
```

## CV

Simpan CV dalam format PDF, lalu sesuaikan di `js/data.js`:

```js
cv: "assets/CV-Nama-Anda.pdf",
```

Selama kedua berkas di atas belum ditambahkan, halaman tetap berjalan normal:
avatar akan menampilkan inisial nama, dan tombol "Unduh CV" otomatis disembunyikan
jika nilai `cv` dikosongkan.
