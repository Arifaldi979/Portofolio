/* ============================================================
   DATA PORTOFOLIO
   ------------------------------------------------------------
   Ubah isi file ini untuk mempersonalisasi portofolio.
   Tidak perlu menyentuh file HTML/CSS/JS lainnya.
   ============================================================ */

const portfolioData = {
  /* ---------- Identitas & Hero ---------- */
  profile: {
    nama: "Arifaldi Putra",
    /* Kosongkan "foto" untuk memakai avatar inisial otomatis.
       Contoh pakai foto: foto: "assets/foto-profil.jpg" */
    foto: "",
    gelar: "Mahasiswa Teknik Informatika",
    kampus: "Universitas Negeri Indonesia",
    tagline:
      "Mahasiswa semester 5 yang fokus pada pengembangan web dan analisis data. Senang mengubah ide sederhana menjadi aplikasi yang benar-benar dipakai orang.",
    lokasi: "Bandung, Jawa Barat",
    email: "arifaldi.putra@email.com",
    telepon: "+62 812-3456-7890",
    /* Letakkan file CV di folder assets/ lalu sesuaikan path-nya */
    cv: "assets/CV-Arifaldi-Putra.pdf",
    sosial: [
      { nama: "GitHub", url: "https://github.com/Arifaldi979", ikon: "github" },
      { nama: "LinkedIn", url: "https://linkedin.com/in/username", ikon: "linkedin" },
      { nama: "Instagram", url: "https://instagram.com/username", ikon: "instagram" },
      { nama: "Email", url: "mailto:arifaldi.putra@email.com", ikon: "mail" },
    ],
  },

  /* ---------- Statistik singkat di Hero ---------- */
  statistik: [
    { angka: "3.78", label: "IPK Terakhir" },
    { angka: "5", label: "Semester" },
    { angka: "8+", label: "Proyek Selesai" },
    { angka: "6", label: "Sertifikat" },
  ],

  /* ---------- Tentang Saya ---------- */
  tentang: {
    paragraf: [
      "Saya Arifaldi Putra, mahasiswa Teknik Informatika yang tertarik pada pengembangan perangkat lunak, khususnya web development. Perjalanan saya dimulai dari rasa penasaran bagaimana sebuah website bekerja, dan sekarang berkembang menjadi kebiasaan membangun proyek kecil setiap ada waktu luang.",
      "Selama perkuliahan saya aktif mengerjakan proyek berbasis JavaScript dan Python, mulai dari aplikasi pencatat keuangan sampai sistem informasi untuk kegiatan kampus. Saya juga menjadi asisten praktikum Algoritma dan Pemrograman, yang mengajarkan saya cara menjelaskan konsep teknis dengan bahasa yang sederhana.",
      "Saat ini saya sedang mencari kesempatan magang di bidang software engineering atau data untuk belajar langsung dari tim yang berpengalaman dan berkontribusi pada produk nyata.",
    ],
    minat: ["Web Development", "Data Analysis", "UI/UX Design", "Open Source", "Machine Learning"],
  },

  /* ---------- Pendidikan ---------- */
  pendidikan: [
    {
      periode: "2023 — Sekarang",
      institusi: "Universitas Negeri Indonesia",
      jurusan: "S1 Teknik Informatika",
      nilai: "IPK 3.78 / 4.00",
      detail:
        "Fokus pada rekayasa perangkat lunak dan basis data. Mata kuliah favorit: Struktur Data, Pemrograman Web, dan Kecerdasan Artifisial.",
    },
    {
      periode: "2020 — 2023",
      institusi: "SMA Negeri 1 Bandung",
      jurusan: "Jurusan IPA",
      nilai: "Rata-rata nilai 89,5",
      detail:
        "Aktif di ekstrakurikuler Karya Ilmiah Remaja dan menjadi finalis lomba olimpiade komputer tingkat kota.",
    },
  ],

  /* ---------- Keahlian ---------- */
  keahlian: [
    {
      kategori: "Bahasa Pemrograman",
      items: [
        { nama: "JavaScript", level: 85 },
        { nama: "Python", level: 80 },
        { nama: "Java", level: 70 },
        { nama: "PHP", level: 65 },
      ],
    },
    {
      kategori: "Frontend",
      items: [
        { nama: "HTML & CSS", level: 90 },
        { nama: "React", level: 75 },
        { nama: "Tailwind CSS", level: 80 },
      ],
    },
    {
      kategori: "Backend & Database",
      items: [
        { nama: "Node.js / Express", level: 75 },
        { nama: "MySQL", level: 80 },
        { nama: "MongoDB", level: 65 },
      ],
    },
    {
      kategori: "Tools & Lainnya",
      items: [
        { nama: "Git & GitHub", level: 85 },
        { nama: "Figma", level: 70 },
        { nama: "Linux", level: 65 },
      ],
    },
  ],

  /* ---------- Proyek ---------- */
  proyek: [
    {
      judul: "SiKeu — Aplikasi Pencatat Keuangan",
      kategori: "Web App",
      unggulan: true,
      deskripsi:
        "Aplikasi web untuk mencatat pemasukan dan pengeluaran harian mahasiswa, lengkap dengan grafik ringkasan bulanan dan ekspor data ke CSV.",
      teknologi: ["React", "Node.js", "Express", "MySQL", "Chart.js"],
      tautan: { demo: "#", kode: "https://github.com/Arifaldi979" },
      emoji: "💰",
    },
    {
      judul: "Sistem Informasi Kegiatan Himpunan",
      kategori: "Web App",
      unggulan: true,
      deskripsi:
        "Platform pendaftaran dan absensi acara himpunan mahasiswa. Mendukung tiga peran pengguna serta pembuatan sertifikat peserta otomatis.",
      teknologi: ["PHP", "MySQL", "Bootstrap"],
      tautan: { demo: "", kode: "https://github.com/Arifaldi979" },
      emoji: "📋",
    },
    {
      judul: "Analisis Sentimen Ulasan Aplikasi",
      kategori: "Data Science",
      unggulan: true,
      deskripsi:
        "Proyek klasifikasi sentimen dari 10.000 ulasan aplikasi di Play Store menggunakan Naive Bayes, mencapai akurasi 87% pada data uji.",
      teknologi: ["Python", "Pandas", "Scikit-learn", "Sastrawi"],
      tautan: { demo: "", kode: "https://github.com/Arifaldi979" },
      emoji: "📊",
    },
    {
      judul: "Portofolio Pribadi",
      kategori: "Website",
      unggulan: false,
      deskripsi:
        "Website portofolio responsif tanpa framework, mendukung mode gelap dan animasi saat scroll. Dibangun agar mudah dipersonalisasi lewat satu file data.",
      teknologi: ["HTML", "CSS", "JavaScript"],
      tautan: { demo: "", kode: "https://github.com/Arifaldi979/Portofolio" },
      emoji: "🪪",
    },
    {
      judul: "PintarKuis — Kuis Interaktif",
      kategori: "Web App",
      unggulan: false,
      deskripsi:
        "Aplikasi kuis pilihan ganda dengan timer, papan peringkat, dan bank soal yang bisa diatur dosen untuk latihan mandiri mahasiswa.",
      teknologi: ["JavaScript", "Firebase"],
      tautan: { demo: "", kode: "https://github.com/Arifaldi979" },
      emoji: "🧠",
    },
    {
      judul: "Redesain Aplikasi Perpustakaan Kampus",
      kategori: "UI/UX",
      unggulan: false,
      deskripsi:
        "Studi kasus UI/UX: riset pengguna ke 20 mahasiswa, pembuatan wireframe, dan prototipe interaktif untuk aplikasi peminjaman buku.",
      teknologi: ["Figma", "User Research"],
      tautan: { demo: "", kode: "" },
      emoji: "🎨",
    },
  ],

  /* ---------- Pengalaman & Organisasi ---------- */
  pengalaman: [
    {
      periode: "2025 — Sekarang",
      posisi: "Asisten Praktikum Algoritma & Pemrograman",
      organisasi: "Laboratorium Informatika, Universitas Negeri Indonesia",
      poin: [
        "Mendampingi 40 mahasiswa per kelas dalam praktikum mingguan.",
        "Menyusun modul latihan dan soal praktikum bersama dosen pengampu.",
        "Memeriksa dan memberi umpan balik pada tugas pemrograman.",
      ],
    },
    {
      periode: "2024 — 2025",
      posisi: "Koordinator Divisi Teknologi",
      organisasi: "Himpunan Mahasiswa Teknik Informatika",
      poin: [
        "Memimpin tim berisi 6 orang untuk mengelola website dan media digital himpunan.",
        "Mengembangkan sistem pendaftaran acara yang dipakai lebih dari 500 peserta.",
        "Mengadakan workshop Git dan GitHub untuk mahasiswa baru.",
      ],
    },
    {
      periode: "2024",
      posisi: "Peserta Studi Independen Web Development",
      organisasi: "Program Kampus Merdeka",
      poin: [
        "Menyelesaikan 6 modul pengembangan web frontend dan backend.",
        "Membangun proyek akhir berupa aplikasi marketplace sederhana secara tim.",
      ],
    },
  ],

  /* ---------- Sertifikat ---------- */
  sertifikat: [
    { nama: "Belajar Dasar Pemrograman Web", penerbit: "Dicoding Indonesia", tahun: "2025" },
    { nama: "Machine Learning untuk Pemula", penerbit: "Dicoding Indonesia", tahun: "2025" },
    { nama: "Google Data Analytics", penerbit: "Coursera", tahun: "2024" },
    { nama: "Responsive Web Design", penerbit: "freeCodeCamp", tahun: "2024" },
    { nama: "Python Data Structures", penerbit: "Coursera", tahun: "2024" },
    { nama: "UI/UX Design Fundamental", penerbit: "Skilvul", tahun: "2023" },
  ],

  /* ---------- Bagian Kontak ---------- */
  kontak: {
    judul: "Mari Terhubung",
    deskripsi:
      "Saya terbuka untuk kesempatan magang, kolaborasi proyek, atau sekadar berdiskusi soal teknologi. Jangan ragu untuk menghubungi saya.",
  },
};
