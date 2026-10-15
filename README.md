# Portofolio Mahasiswa

Website portofolio satu halaman untuk mahasiswa. Dibuat dengan HTML, CSS, dan JavaScript murni — tanpa framework dan tanpa proses build, jadi bisa langsung dibuka atau di-hosting di GitHub Pages.

## Fitur

- **Data terpusat** — seluruh konten diambil dari satu file (`js/data.js`), tidak perlu menyentuh HTML.
- **Mode terang & gelap** — mengikuti preferensi sistem dan pilihan disimpan di browser.
- **Responsif** — tata letak menyesuaikan layar desktop, tablet, dan ponsel.
- **Animasi saat scroll** — bagian halaman dan bar keahlian muncul bertahap.
- **Filter proyek** — saring proyek berdasarkan kategori atau tandai sebagai unggulan.
- **Form kontak** — validasi input, lalu membuka aplikasi email dengan pesan yang sudah terisi.
- **Ramah cetak** — tekan Ctrl/Cmd + P untuk menyimpan versi PDF yang bersih.

## Bagian Halaman

Hero · Tentang Saya · Riwayat Pendidikan · Keahlian Teknis · Proyek · Pengalaman & Organisasi · Sertifikat · Kontak

## Struktur Berkas

```
Portofolio/
├── index.html          # Kerangka halaman
├── css/
│   └── style.css       # Seluruh gaya, termasuk tema gelap
├── js/
│   ├── data.js         # ← Ubah di sini untuk personalisasi
│   └── main.js         # Render konten & interaksi
├── assets/             # Foto profil dan file CV
└── README.md
```

## Cara Menjalankan

Cukup buka `index.html` di browser. Atau jalankan server lokal agar lebih mirip kondisi produksi:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

Lalu akses `http://localhost:8000`.

## Cara Personalisasi

Semua konten ada di `js/data.js`. Buka file tersebut dan sesuaikan bagian berikut:

| Bagian        | Isi                                                    |
| ------------- | ------------------------------------------------------ |
| `profile`     | Nama, gelar, kampus, tagline, kontak, media sosial     |
| `statistik`   | Empat angka ringkas di bagian hero (IPK, semester, …)  |
| `tentang`     | Paragraf perkenalan dan daftar minat                   |
| `pendidikan`  | Riwayat sekolah dan kuliah                             |
| `keahlian`    | Kelompok keahlian beserta level 0–100                  |
| `proyek`      | Daftar proyek, teknologi, dan tautan demo/kode         |
| `pengalaman`  | Pengalaman kerja, magang, dan organisasi               |
| `sertifikat`  | Sertifikat dan pelatihan yang pernah diikuti           |
| `kontak`      | Judul dan deskripsi pada bagian kontak                 |

### Mengganti foto profil

Letakkan foto di folder `assets/`, lalu ubah di `js/data.js`:

```js
foto: "assets/foto-profil.jpg",
```

Jika dibiarkan kosong (`foto: ""`), halaman otomatis menampilkan avatar berisi inisial nama.

### Menambahkan CV

Simpan CV di folder `assets/` dan sesuaikan path-nya:

```js
cv: "assets/CV-Nama-Anda.pdf",
```

Kalau dikosongkan, tombol "Unduh CV" tidak akan ditampilkan.

### Mengubah warna tema

Warna utama diatur lewat CSS variable di bagian atas `css/style.css`:

```css
:root {
  --brand: #5b5bd6;
  --brand-2: #9333ea;
}
```

## Hosting di GitHub Pages

1. Buka **Settings → Pages** pada repositori ini.
2. Pada bagian *Source*, pilih branch `main` dan folder `/ (root)`.
3. Simpan, lalu tunggu beberapa menit. Situs akan tersedia di
   `https://<username>.github.io/Portofolio/`.

## Catatan

Isi `js/data.js` saat ini masih berupa data contoh. Ganti dengan data pribadi Anda sebelum dibagikan ke perekrut atau dosen.
