# **Gemicraft AI: Preservasi Lingkungan & Reduksi Emisi Global melalui Inovasi Ekonomi Sirkular**

**Gemicraft AI** adalah platform *Green-Tech* revolusioner yang fokus pada **pelestarian lingkungan** dengan memitigasi perubahan iklim melalui implementasi **ekonomi sirkular** yang cerdas. Aplikasi ini memberdayakan masyarakat untuk secara aktif mengurangi jejak karbon mereka dengan mengubah sampah rumah tangga menjadi produk bernilai tinggi, sehingga secara langsung mencegah penumpukan sampah yang menghasilkan gas rumah kaca di Tempat Pembuangan Akhir (TPA).

### Link Demo Aplikasi : https://gemicraft-ai.vercel.app/

## 🌟 Inovasi & Keunggulan Utama

Aplikasi ini menggabungkan teknologi mutakhir dengan pemberdayaan komunitas untuk menciptakan dampak nyata bagi bumi:

*   **Real-time Carbon Footprint Tracker:** Fitur inovatif yang memungkinkan pengguna melacak dampak langsung mereka terhadap perubahan iklim. Sistem secara otomatis menghitung total emisi **$CO_2$ yang berhasil dicegah** dari setiap material sampah yang didaur ulang dan divalidasi.
*   **AI-Powered Waste Scanner:** Menggunakan kecerdasan buatan untuk mengidentifikasi jenis sampah (Plastik, Kertas, Logam) dan menganalisis potensi reduksi emisi karbonnya secara instan.
*   **Gamifikasi RT/RW:** Mendorong kompetisi sehat antar warga melalui sistem peringkat poin tingkat RT.
*   **AI Interactive Tutor:** Bimbingan langkah-demi-langkah (The Workshop) yang didukung oleh Gemini AI untuk membantu warga mengubah sampah menjadi aset ekonomi sirkular yang berkualitas.
*   **Green-Showcase Marketplace:** Platform untuk memonetisasi hasil karya ramah lingkungan, memastikan sampah kembali berputar dalam ekosistem ekonomi dan tidak terbuang ke lingkungan.


## 🛠️ Fitur Utama
1.  **Discovery Dashboard:** Ringkasan poin pribadi dan status peringkat RT saat ini.
2.  **AI Scanner & Recommendation:** Analisis sampah otomatis yang merekomendasikan 3 kategori proyek: Mudah, Sedang, dan Sulit.
3.  **Project Workspace:** Fasilitas pengerjaan proyek dengan tab tutorial dan kolaborasi lintas RT.
4.  **Climate Impact Profile:** Melacak statistik pribadi terkait total **$CO_2$ yang berhasil dicegah** dan koleksi lencana pencapaian.
5.  **Final Validation:** Verifikasi hasil karya akhir oleh AI sebelum poin dampak dikreditkan ke akun pengguna.

## ⚙️ Arsitektur Teknologi

Gemicraft AI dibangun menggunakan teknologi modern untuk menjamin performa yang praktis, transparan, dan aman:

*   **Framework:** Next.js (Frontend & Serverless Functions)
*   **Backend & Database:** Supabase (Real-time Database, Authentication, & Storage)
*   **AI Engine:** Google Gemini AI API (Analisis Gambar & Tutor Interaktif)

## 💻 Tata Cara Instalasi & Konfigurasi

### Prasyarat
*   Node.js versi 18 atau lebih baru.
*   Akun Supabase (untuk database dan autentikasi).
*   Google AI Studio API Key (untuk fitur Gemini AI).

### Langkah-langkah
1.  **Clone Repositori:**
    ```bash
    git clone https://github.com/username/gemicraft-ai.git
    cd gemicraft-ai
    ```
2.  **Instalasi Dependensi:**
    ```bash
    npm install
    ```
3.  **Pengaturan Environment Variables:**
    Buat file `.env.local` di root direktori dan masukkan kunci berikut:
    ```env
    # Supabase Configuration
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

    # Google AI (Gemini) Configuration
    GOOGLE_API_KEY=your_google_gemini_api_key
    ```
4.  **Menjalankan Aplikasi:**
    ```bash
    npm run dev
    ```

## 🔒 Keamanan & Integrasi
Untuk menjamin keamanan data pengguna, platform ini menggunakan protokol **SSL/TLS** dalam setiap transaksi data dan enkripsi untuk penyimpanan informasi sensitif. Data yang terkumpul juga dirancang untuk dapat terintegrasi secara nasional guna memudahkan pemantauan pengelolaan sampah dan perencanaan pelestarian lingkungan di Indonesia.

---
**Gemicraft AI** — *Mendukung Ekonomi Sirkular, Melestarikan Lingkungan, dan Mengurangi Jejak Karbon untuk Masa Depan yang Lebih Hijau.*
