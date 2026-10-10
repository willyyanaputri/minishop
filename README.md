# 🛍️ MiniShop — E-Commerce Web Application

MiniShop adalah aplikasi web e-commerce sederhana yang dikembangkan menggunakan React dan Vite sebagai proyek pembelajaran pengembangan web modern. Aplikasi ini menyediakan fitur katalog produk, pencarian, filter, detail produk, keranjang belanja, autentikasi sederhana, dan riwayat pesanan.

Proyek ini dibuat untuk mempraktikkan konsep reusable components, routing, state management, integrasi API, validasi form, testing, optimasi performa, serta deployment aplikasi web.

## ✨ Fitur Utama

### 🏠 1. Katalog Produk
- Menampilkan daftar produk dalam bentuk kartu.
- Menampilkan gambar, nama, dan harga produk.
- Mencari produk berdasarkan kata kunci.
- Menyediakan filter produk.
- Menampilkan detail produk melalui halaman tersendiri.

### 🛒 2. Keranjang Belanja
- Menambahkan produk ke keranjang.
- Mengelola data keranjang menggunakan React Context API.
- Menyimpan data keranjang di localStorage agar tetap tersedia setelah halaman dimuat ulang.

### 🔐 3. Autentikasi
- Halaman login dan registrasi.
- Validasi input pada form login.
- Pengelolaan status autentikasi menggunakan AuthContext.
- Protected Route untuk membatasi akses ke halaman tertentu.

### 📦 4. Riwayat Pesanan
- Menyediakan halaman riwayat pesanan.
- Menampilkan kondisi kosong ketika belum ada riwayat pesanan.

### ⚡ 5. Optimasi dan Testing
- Menggunakan React.memo untuk mengurangi render yang tidak diperlukan pada komponen tertentu.
- Menggunakan React.lazy dan Suspense untuk lazy loading halaman.
- Menjalankan pengujian komponen dan context menggunakan Vitest serta React Testing Library.

## 🧰 Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| React | Membangun antarmuka pengguna |
| Vite | Development server dan production build |
| JavaScript (ES6+) | Logika aplikasi |
| Tailwind CSS | Styling antarmuka |
| React Router | Routing dan navigasi |
| Context API | State management |
| localStorage | Penyimpanan data di browser |
| Vitest | Menjalankan unit test |
| React Testing Library | Menguji perilaku komponen |
| Git & GitHub | Version control dan penyimpanan source code |
| Vercel | Deployment aplikasi web |

## 📋 Persyaratan Sistem

Pastikan perangkat telah memiliki:

- Node.js versi yang kompatibel dengan Vite yang digunakan.
- npm.
- Git.
- Browser modern.

## 🚀 Instalasi dan Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/willyyanaputri/minishop.git
```

### 2. Masuk ke Folder Project

```bash
cd minishop
```

### 3. Instal Dependensi

```bash
npm install
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Buka alamat lokal yang ditampilkan di terminal, biasanya:

```text
http://localhost:5173
```

### 5. Build untuk Production

```bash
npm run build
```

Hasil build akan disimpan dalam folder `dist/`.

### 6. Preview Production Build

```bash
npm run preview
```

Gunakan alamat lokal yang ditampilkan terminal untuk melihat hasil build sebelum deployment.

## 🧪 Testing

MiniShop menggunakan Vitest dan React Testing Library untuk menguji komponen serta perilaku state management.

Jalankan seluruh test dalam mode watch:

```bash
npm test
```

Untuk menjalankan test satu kali tanpa mode watch:

```bash
npx vitest run
```

Test yang tersedia mencakup:

- **ProdukCard:** pengujian tampilan nama dan harga produk.
- **Login:** pengujian validasi email dan password.
- **KeranjangContext:** pengujian penambahan dan penghapusan produk dari keranjang.

## 📁 Struktur Folder

```text
minishop/
├── public/
│   ├── img/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── ProdukCard.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── KeranjangContext.jsx
│   ├── data/
│   │   └── produk.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── DetailProduk.jsx
│   │   ├── Home.jsx
│   │   ├── Keranjang.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   ├── Register.jsx
│   │   └── RiwayatPesanan.jsx
│   ├── tests/
│   │   ├── KeranjangContext.test.jsx
│   │   ├── Login.test.jsx
│   │   ├── ProdukCard.test.jsx
│   │   └── setup.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

### Penjelasan Folder

- `public/`: gambar produk dan aset statis yang dapat diakses langsung.
- `src/assets/`: aset yang diimpor oleh komponen aplikasi.
- `src/components/`: komponen UI yang dapat digunakan kembali.
- `src/context/`: pengelolaan state autentikasi dan keranjang.
- `src/data/`: data produk.
- `src/hooks/`: custom hooks untuk membantu pengelolaan data.
- `src/pages/`: halaman utama aplikasi.
- `src/tests/`: file pengujian komponen dan context.
- `App.jsx`: konfigurasi utama aplikasi dan navigasi.
- `main.jsx`: entry point React.
- `vite.config.js`: konfigurasi Vite.

## 🌐 Deployment

MiniShop di-deploy menggunakan Vercel.

**Live Demo:** Ganti bagian ini dengan URL deployment Vercel milikmu.

**GitHub Repository:**  
https://github.com/willyyanaputri/minishop

Untuk melakukan deployment ulang setelah perubahan kode:

```bash
git add .
git commit -m "Update MiniShop"
git push
```

Jika repository sudah terhubung dengan Vercel, perubahan pada branch yang dikonfigurasi dapat memicu deployment otomatis.

## 📚 Tujuan Pembelajaran

Melalui proyek MiniShop, konsep yang dipelajari meliputi:

1. Pembuatan komponen React yang reusable.
2. Penggunaan props dan state.
3. Routing dan navigasi multi-halaman.
4. State management menggunakan Context API.
5. Persistensi data menggunakan localStorage.
6. Integrasi API, pencarian, dan filter produk.
7. Validasi form dan autentikasi sederhana.
8. Pengujian komponen menggunakan Vitest.
9. Optimasi performa dan lazy loading.
10. Production build, version control, dan deployment.

## 👩‍💻 Author

**Willyyana Putri**

GitHub: [@willyyanaputri](https://github.com/willyyanaputri)

---

MiniShop dikembangkan sebagai proyek pembelajaran dan portofolio untuk meningkatkan keterampilan pengembangan aplikasi web menggunakan React.
