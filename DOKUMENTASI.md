# 📁 Dokumentasi Project — Habib Portfolio (HPT)

> Dokumentasi teknis untuk developer yang baru clone project ini.

---

## 📖 Ringkasan Project

**HPT (Habib Portfolio)** adalah aplikasi web **personal portfolio** yang dibangun dengan **Next.js 15** dan **React 19**. Aplikasi ini menampilkan profil, keahlian (skills), proyek, dan halaman kontak seorang developer. Terdapat juga route `/dashboard` yang sedang dalam tahap pengembangan (sebagian besar kodenya masih di-comment).

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|---|---|---|
| **Next.js** | 15.3.1 | Framework utama (App Router) |
| **React** | ^19.0.0 | UI library |
| **TypeScript** | ^5 | Type safety |
| **Tailwind CSS** | ^4 | Styling utility-first |
| **Framer Motion** | ^12.15.0 | Animasi komponen |
| **AOS** | ^2.3.4 | Animate On Scroll |
| **Font Awesome** | ^6.7.2 | Library ikon |
| **React Icons** | ^5.5.0 | Library ikon tambahan |
| **postgres** | ^3.4.7 | Koneksi database PostgreSQL |

---

## 📂 Struktur Direktori

```
HPT/
├── app/                        # Next.js App Router
│   ├── (main)/                 # Route group utama (portfolio)
│   │   ├── globals.css         # Stylesheet global (custom vars, animasi, komponen)
│   │   ├── layout.tsx          # Layout untuk halaman utama (wrap dengan AOS & gradient bg)
│   │   └── page.tsx            # Halaman utama "/" — merangkai semua section
│   ├── components/             # Semua komponen UI
│   │   ├── Hero.tsx            # Section Hero — foto profil, nama, typing animation, social links
│   │   ├── Navbar.tsx          # Navigasi bar atas
│   │   ├── Aboutme.tsx         # Section "About Me"
│   │   ├── MySkill.tsx         # Section skills dengan skill bar (fetch dari DB)
│   │   ├── ProjectFutures.tsx  # Section daftar proyek
│   │   ├── Contact.tsx         # Section formulir kontak
│   │   ├── AOSInitializer.tsx  # Client component untuk inisialisasi AOS
│   │   ├── ThemeToggle.tsx     # Toggle dark/light mode
│   │   ├── TypingText.tsx      # Komponen animasi teks mengetik
│   │   └── ui/
│   │       └── SkillBar.tsx    # Komponen progress bar untuk skill
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useTypingAnimation.ts   # Hook animasi typing (ketik & hapus teks bergantian)
│   │   ├── useSmoothScroll.ts      # Hook untuk smooth scroll ke anchor
│   │   └── useClickOutside.ts      # Hook untuk deteksi klik di luar elemen
│   ├── dashboard/              # Route /dashboard (admin panel — WIP)
│   │   ├── layout.tsx          # Layout dashboard (sebagian besar di-comment)
│   │   └── page.tsx            # Halaman dashboard (besar, dalam pengembangan)
│   └── layout.tsx              # Root layout (html + body wrapper)
│
├── lib/
│   └── db.ts                   # Konfigurasi koneksi PostgreSQL (via env vars)
│
├── services/
│   └── skillService.ts         # Service layer — query skills dari database
│
├── types/
│   └── skill.ts                # TypeScript interface untuk data Skill
│
├── public/                     # Aset statis (SVG icons)
├── next.config.ts              # Konfigurasi Next.js (image domains)
├── tsconfig.json               # Konfigurasi TypeScript
├── postcss.config.mjs          # Konfigurasi PostCSS (untuk Tailwind v4)
├── eslint.config.mjs           # Konfigurasi ESLint
└── package.json                # Dependensi dan scripts npm
```

---

## 🗺️ Alur Routing (App Router)

```
/                   →  app/(main)/page.tsx     → Halaman portfolio utama
/dashboard          →  app/dashboard/page.tsx  → Admin dashboard (WIP)
```

Folder `(main)` adalah **Route Group** — nama foldernya tidak masuk ke URL. Ini digunakan untuk memisahkan layout antara halaman portfolio dan dashboard.

---

## 🧩 Penjelasan Komponen Utama

### `app/(main)/page.tsx`
Halaman utama yang merangkai semua section secara berurutan:
```
<Navbar /> → <Hero /> → <Aboutme /> → <MySkill /> → <ProjectFutures /> → <Contact />
```

### `app/(main)/layout.tsx`
Membungkus seluruh halaman utama dengan:
- `globals.css` (stylesheet utama)
- `AOSInitializer` — agar animasi AOS aktif di seluruh halaman
- Class `gradient-bg` untuk background gelap bergradasi

### `lib/db.ts`
Koneksi ke **PostgreSQL** menggunakan library `postgres`. Semua kredensial diambil dari **environment variables**.

### `services/skillService.ts`
Service untuk mengambil data skills dari database. Mendukung filter berdasarkan `category`:
- `'technical'` → skill teknis (programming, tools, dll)
- `'professionall'` (typo di kode, bisa dikoreksi) → soft skills / professional skills
- Tanpa filter → semua skills

### `types/skill.ts`
Interface TypeScript untuk data skill:
```ts
interface Skill {
  id: number;
  name: string;
  category: string;    // 'technical' | 'professionall'
  proficiency: number; // 0–100 (persentase)
  icon?: string;       // Nama/kelas ikon (opsional)
  created_at: Date;
}
```

---

## ⚙️ Konfigurasi

### `next.config.ts` — Image Domains
Project mengizinkan gambar dari domain eksternal:
- `scontent.fsrg10-1.fna.fbcdn.net` — Facebook CDN (foto profil)
- `images.unsplash.com` — Unsplash (gambar background)

### `globals.css` — CSS Variables
```css
--primary:   #ff5f1f  /* Neon Orange */
--secondary: #0b0bff  /* Ultramarine */
--dark:      #0f172a  /* Dark background */
--darker:    #020617  /* Darker background */
```

---

## 🗄️ Skema Database

Project menggunakan **PostgreSQL**. Berdasarkan query di `skillService.ts`, diperlukan minimal satu tabel:

### Tabel `skills`
| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | integer | Primary key |
| `name` | varchar | Nama skill (contoh: "React", "Node.js") |
| `category` | varchar | `'technical'` atau `'professionall'` |
| `proficiency` | integer | Level keahlian (0–100) |
| `icon` | varchar | Nama ikon (opsional) |
| `active_st` | boolean | Status aktif skill (true/false) |
| `created_at` | timestamp | Waktu dibuat |

**SQL untuk membuat tabel:**
```sql
CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  proficiency INTEGER NOT NULL CHECK (proficiency BETWEEN 0 AND 100),
  icon VARCHAR(100),
  active_st BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🚀 Setup & Cara Menjalankan Project

### 1. Prasyarat
Pastikan sudah terinstall:
- **Node.js** `>= 18.x` (rekomendasi: Node 20 LTS)
- **npm** `>= 9.x`
- **PostgreSQL** (lokal atau cloud, contoh: Supabase, Neon, Railway)

Cek versi:
```bash
node -v
npm -v
```

---

### 2. Install Dependencies
```bash
cd HPT
npm install
```

---

### 3. Setup Environment Variables

Buat file `.env.local` di root project:
```bash
touch .env.local
```

Isi dengan konfigurasi database PostgreSQL kamu:
```env
POSTGRES_HOST=localhost
POSTGRES_DATABASE=nama_database_kamu
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password_kamu
```

> **Catatan:** Jika menggunakan layanan cloud seperti **Supabase** atau **Neon**, gunakan connection string yang mereka berikan dan sesuaikan nilainya.

---

### 4. Setup Database

Buat database dan tabel yang dibutuhkan. Jalankan SQL berikut di PostgreSQL:

```sql
-- Buat database (jika belum ada)
CREATE DATABASE nama_database_kamu;

-- Buat tabel skills
CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  proficiency INTEGER NOT NULL CHECK (proficiency BETWEEN 0 AND 100),
  icon VARCHAR(100),
  active_st BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contoh data dummy
INSERT INTO skills (name, category, proficiency, icon, active_st) VALUES
  ('React', 'technical', 90, 'react', true),
  ('Next.js', 'technical', 85, 'nextjs', true),
  ('TypeScript', 'technical', 80, 'typescript', true),
  ('Node.js', 'technical', 75, 'nodejs', true),
  ('PostgreSQL', 'technical', 70, 'postgresql', true),
  ('Communication', 'professionall', 90, NULL, true),
  ('Team Work', 'professionall', 85, NULL, true);
```

---

### 5. Jalankan Development Server
```bash
npm run dev
```

Buka browser di: **http://localhost:3000**

---

### 6. Scripts yang Tersedia
```bash
npm run dev      # Jalankan server development (dengan Turbopack)
npm run build    # Build untuk production
npm run start    # Jalankan server production (setelah build)
npm run lint     # Cek code dengan ESLint
```

---

## ⚠️ Hal yang Perlu Diperhatikan

1. **File `.env.local` tidak boleh di-commit** — sudah ada di `.gitignore`. Buat manual di setiap environment.

2. **Halaman `/dashboard` masih WIP** — layout-nya sebagian besar masih di-comment dan `page.tsx`-nya sangat besar (170KB). Belum siap digunakan.

3. **Foto profil di Hero** menggunakan URL langsung dari Facebook CDN — URL ini bisa expired. Pertimbangkan untuk mengganti dengan gambar lokal di folder `public/`.

4. **Typo di kode**: category `'professionall'` di `skillService.ts` salah eja (harusnya `'professional'`). Pastikan konsisten dengan data yang dimasukkan ke database.

5. **`console.log` di hook** — ada `console.log` debug yang tertinggal di `useTypingAnimation.ts` baris 9. Pertimbangkan untuk dihapus sebelum production.

6. **Light mode belum sepenuhnya selesai** — CSS untuk `.light .glass` masih berisi `background: red` (placeholder).

---

## 🌐 Deployment

### Deploy ke Vercel (Direkomendasikan)
1. Push project ke GitHub
2. Import repo di [vercel.com](https://vercel.com)
3. Set **Environment Variables** di dashboard Vercel (isi nilai yang sama dengan `.env.local`)
4. Deploy otomatis

### Environment Variables di Vercel:
```
POSTGRES_HOST      → host database production
POSTGRES_DATABASE  → nama database production
POSTGRES_USER      → username database production
POSTGRES_PASSWORD  → password database production
```

---

*Dokumentasi ini dibuat otomatis berdasarkan analisis kode sumber project pada 16 Juni 2026.*
