# Sebuah Semesta Kecil untuk Seng ✦

Website ulang tahun mobile-friendly, dibuat dengan HTML, CSS, dan JavaScript murni.

## Isi proyek
- `index.html` — struktur halaman, album kenangan, surat, dan musik.
- `style.css` — tema galaxy, bintang, planet, dan tampilan responsif untuk HP.
- `script.js` — mini game 3 pertanyaan dan interaksi tombol.
- `assets/photos/` — tempat foto kalian (opsional).
- `assets/music.mp3` — musik latar opsional; file ini belum disertakan.

## 1. Jalankan di laptop
1. Ekstrak ZIP.
2. Buka folder `galaksi-untuk-seng`.
3. Klik dua kali `index.html` untuk melihat website di browser.
4. Untuk pengalaman lebih baik, buka lewat VS Code dan gunakan ekstensi Live Server.

## 2. Personalisasi sebelum tanggal 
### Foto
Cara paling mudah: buka `index.html`, cari `photo-slot`, lalu ganti blok visual tiap kartu dengan:
`<img class="memory-photo" src="assets/photos/foto-01.jpg" alt="Kenangan kita">`

Lakukan untuk tiga kartu, ganti nama file sesuai foto. Tambahkan aturan ini di bagian akhir `style.css`:
`.memory-photo{width:100%;height:220px;object-fit:cover;border-radius:12px;margin-bottom:22px}`
Untuk tampilan HP, boleh gunakan `height:125px` pada media query yang sudah ada.

Salin foto ke `assets/photos/` dan gunakan nama sederhana seperti `foto-01.jpg`, `foto-02.jpg`, `foto-03.jpg`.

### Teks dan surat
Edit teks di `index.html` — terutama isi kartu kenangan dan paragraf dalam `.letter-body`. Buat spesifik: sebutkan momen nyata, hal kecil yang kamu sukai, dan harapan yang tulus. Hindari memasukkan detail privat yang tidak ingin tersebar jika situs publik.

### Pertanyaan game
Edit array `questions` di bagian atas `script.js`.
- `question`: teks pertanyaan.
- `answers`: tiga pilihan.
- `correct`: indeks jawaban yang dianggap benar, dimulai dari 0.
- `feedback`: pesan setelah jawaban benar.

### Musik (opsional)
Gunakan audio yang kamu punya hak untuk digunakan. Simpan sebagai `assets/music.mp3`. Buat folder `assets` jika belum ada (folder `assets/photos` sudah tersedia). Tombol musik sengaja membutuhkan ketukan pengguna karena browser HP biasanya tidak mengizinkan autoplay audio.

## 3. Hosting gratis dengan GitHub Pages
1. Login atau buat akun di GitHub.
2. Buat repository baru, misalnya `untuk-seng`.
3. Unggah `index.html`, `style.css`, `script.js`, dan folder `assets`.
4. Buka **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
7. Tunggu proses deployment selesai. GitHub akan menampilkan URL website. Buka URL itu dari HP untuk mengetesnya.
8. Kirim URL tersebut ke Seng pada momen yang kamu inginkan.

Alternatif: Netlify juga bisa menerbitkan folder statis melalui fitur deploy manual.

## Checklist sebelum dikirim
- [ ] Ganti semua teks placeholder dengan cerita kalian.
- [ ] Tambahkan minimal 3 foto yang pantas dibagikan lewat situs.
- [ ] Ubah pertanyaan game supaya personal dan tidak terlalu mudah ditebak orang lain.
- [ ] Tes tombol, scroll, ukuran teks, dan gambar di HP.
- [ ] Tes URL hosting dalam mode incognito dan jaringan seluler.
- [ ] Pastikan musik opsional tersedia dan tombolnya berfungsi.
- [ ] Jangan unggah foto, pesan, atau informasi yang sangat privat jika tidak nyaman tersimpan di situs publik.

## Rencana 2–3 hari
**Hari 1:** personalisasi teks, foto, dan pertanyaan game.
**Hari 2:** uji di HP, perbaiki tampilan, hosting.
**Hari 3 (cadangan):** cek URL, detail kecil, dan jadwalkan pengiriman sebelum/tepat pada 12 Oktober 2026.
