# KASINO — KAS Informatics Organization

Aplikasi mobile UI/UX untuk simulasi pengelolaan kas Himpunan Mahasiswa Informatika, dibuat dengan React Native, Expo, TypeScript, dan Expo Router.

> **Status UTS:** data dan tindakan bisnis masih berupa simulasi lokal. Aplikasi ini tidak mengirim pembayaran, tidak memverifikasi transfer sungguhan, dan tidak menyimpan transaksi ke server.

## Fitur dan layar
- Login dengan pemilihan akun demo (Anggota, Bendahara 1, Bendahara 2, Super Admin).
- Register; pendaftaran baru selalu menjadi Anggota.
- Dashboard yang menyesuaikan role.
- Pemasukan dan pembayaran tunai (simulasi bendahara).
- Verifikasi pembayaran transfer (simulasi).
- Unggah bukti transfer (pemilih file lokal opsional; tidak dikirim ke server).
- Pengeluaran darurat dengan perhitungan subtotal dan total.
- Riwayat transaksi dan detail transaksi.
- Laporan keuangan.
- Deteksi anomali dengan contoh selisih Rp10.000.
- Profil dan pengelolaan role (khusus tampilan Super Admin).

## Teknologi
- React Native + Expo SDK 58 (React Native 0.88). SDK 58 dirilis 15 Oktober 2026; cek kompatibilitas Expo Go karena distribusi toko aplikasi dapat menyusul rilis SDK.
- TypeScript
- Expo Router
- `@expo/vector-icons`
- Expo Document Picker

## Menjalankan aplikasi
1. Instal Node.js versi LTS yang kompatibel dengan Expo.
2. Ekstrak repository, lalu jalankan:
   ```bash
   npm install
   npx expo install --fix
   npx expo start
   ```
3. Untuk SDK 58, gunakan development build bila Expo Go dari toko aplikasi belum mendukung SDK tersebut. Jalankan `npm run web` untuk pratinjau web. Sebelum demo, verifikasi metode yang sesuai dengan perangkat penguji.
4. Pilih akun demo di layar Login. Pemilihan role hanya untuk demonstrasi; ini bukan autentikasi atau kontrol akses produksi.

## Navigasi demo yang disarankan
Login → Dashboard → Pemasukan/Verifikasi → Pengeluaran → Riwayat → Detail → Laporan → Anomali → Profil. Ulangi login dengan role lain untuk melihat dashboard yang berbeda.

## Palet resmi
`#142f70`, `#3b248c`, `#3c76c3`, `#ffffff`, `#000000`.

## Catatan dokumentasi
Screenshot aktual setiap layar, tautan repository publik, tautan/QR demo yang telah diuji, dan video demo maksimal 5 menit perlu ditambahkan setelah aplikasi dijalankan pada perangkat. Tautan demo dan screenshot tidak dicantumkan sebagai sudah tersedia karena belum diterbitkan atau diverifikasi.
