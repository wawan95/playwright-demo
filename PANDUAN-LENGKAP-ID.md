# Panduan Lengkap Membuat Portfolio Playwright QA Automation

Panduan ini membawa project dari folder hasil ekstrak hingga repository GitHub. Gunakan Windows + VS Code.

## Tahap 1 — Download dan ekstrak
1. Download `playwright-qa-portfolio.zip` dari percakapan ini.
2. Klik kanan ZIP > **Extract All...**
3. Simpan di lokasi sederhana, misalnya `C:\xampp\htdocs\playwright-qa-portfolio`.
4. Buka VS Code > **File > Open Folder...** > pilih folder `playwright-qa-portfolio`.
5. Pastikan file `package.json`, `playwright.config.js`, folder `tests`, `pages`, dan `docs` terlihat.

## Tahap 2 — Periksa Node.js dan npm
Buka **Terminal > New Terminal** di VS Code. Jalankan:

```bash
node -v
npm -v
```

Jika kedua perintah menampilkan versi, lanjutkan. Jika tidak, install Node.js LTS dari https://nodejs.org/en/download, tutup VS Code, buka kembali, lalu cek lagi.

## Tahap 3 — Install dependencies dan browser
Pastikan terminal sedang berada di folder root `playwright-qa-portfolio` (folder yang berisi `package.json`). Jalankan:

```bash
npm install
npx playwright install chromium
```

Tunggu hingga selesai. `npm install` akan membuat `package-lock.json`; simpan file ini ke GitHub bersama project.

## Tahap 4 — Jalankan test
Jalankan seluruh test:

```bash
npm test
```

Untuk melihat browser bergerak saat test:

```bash
npm run test:headed
```

Jalankan smoke test saja:

```bash
npm run test:smoke
```

Daftar test yang ditemukan:

```bash
npx playwright test --list
```

Project ini berisi 7 test yang dirancang: 4 login dan 3 inventory. Jumlah dan hasil aktual harus dikonfirmasi dari output di laptop. Jangan mengklaim test passed sebelum benar-benar menjalankannya.

## Tahap 5 — Buka HTML report
Setelah test selesai, jalankan:

```bash
npm run test:report
```

Di report, periksa:
- Test yang passed/failed.
- Error message dan langkah test.
- Screenshot/video/trace jika tersedia untuk test yang gagal.

File report lokal disimpan di `playwright-report/`; artefak test biasanya berada di `test-results/`. Kedua folder ini diabaikan Git karena dapat dibuat ulang.

## Tahap 6 — Jika ada error
- `node is not recognized`: install Node.js LTS, restart VS Code, periksa PATH.
- `Cannot find module '@playwright/test'`: pastikan terminal berada di folder project dan jalankan `npm install`.
- Browser tidak ditemukan: jalankan `npx playwright install chromium`.
- `No tests found`: pastikan nama file berakhiran `.spec.js` dan ada di folder `tests`.
- Test gagal karena selector/teks: buka website demo, baca error report, dan cek apakah website/locator berubah. Jangan menghapus assertion hanya agar test hijau.
- Website tidak bisa diakses: periksa koneksi internet, lalu coba lagi nanti karena SauceDemo adalah website pihak ketiga.

## Tahap 7 — Review project sebelum publish
Pastikan:
- `tests/login.spec.js` dan `tests/inventory.spec.js` ada.
- `pages/LoginPage.js` dan `pages/InventoryPage.js` ada.
- `docs/test-plan.md` dan `docs/test-cases.md` ada.
- `README.md` menjelaskan install, cara menjalankan test, cakupan test, dan batasan.
- `.gitignore` mengabaikan `node_modules/`, `playwright-report/`, `test-results/`, dan `.env`.
- `package-lock.json` sudah dibuat oleh `npm install`.

## Tahap 8 — Inisialisasi Git
Periksa Git:

```bash
git --version
```

Jika Git terpasang, dari root project jalankan:

```bash
git init
git add .
git status
git commit -m "Initial Playwright QA automation portfolio"
```

Periksa hasil `git status` sebelum commit. Jangan commit credential, token, atau file `.env`.

Jika Git meminta nama/email, konfigurasi identitas Git yang ingin kamu gunakan:

```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email-github-kamu@example.com"
```

Ganti contoh di atas dengan identitas GitHub milikmu.

## Tahap 9 — Buat repository GitHub
1. Login ke https://github.com.
2. Klik tombol **New repository**.
3. Nama repository: `playwright-qa-portfolio`.
4. Isi deskripsi: `UI functional automation testing with Playwright, JavaScript, POM, and GitHub Actions`.
5. Pilih **Public** jika ingin recruiter dapat melihatnya.
6. Saat membuat repository, jangan tambahkan README, `.gitignore`, atau license jika file-file tersebut sudah ada di project lokal.
7. Klik **Create repository**.

GitHub akan menampilkan URL repository, misalnya `https://github.com/USERNAME/playwright-qa-portfolio`. Ganti `USERNAME` dengan username milikmu.

## Tahap 10 — Push project ke GitHub
Salin URL repository milikmu dari halaman GitHub, lalu jalankan di terminal (ganti URL contoh):

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/playwright-qa-portfolio.git
git push -u origin main
```

Jika `origin already exists`, periksa remote dengan `git remote -v`; jangan menambahkan remote kedua tanpa memeriksa yang sudah ada. Jika diminta autentikasi, ikuti prompt login GitHub di browser atau credential manager.

Setelah push selesai, refresh halaman repository GitHub dan periksa file serta README.

## Tahap 11 — Verifikasi GitHub Actions
1. Buka repository di GitHub.
2. Pilih tab **Actions**.
3. Buka workflow **Playwright Tests**.
4. Tunggu workflow selesai.
5. Jika berhasil, semua job ditandai hijau. Jika gagal, buka job dan baca log langkah yang gagal.
6. Jika workflow sukses, artifact `playwright-report` bisa diunduh dari halaman run. Report ini bukan otomatis menjadi halaman publik; artifact tersedia sesuai retention workflow.

Workflow menggunakan `npm ci`, jadi `package-lock.json` harus ikut di-commit. `npm install` pada Tahap 3 akan membuatnya.

## Tahap 12 — Final quality check
Checklist akhir:
- [ ] `npm test` sudah dijalankan lokal dan hasilnya diperiksa.
- [ ] HTML report bisa dibuka.
- [ ] README tampil dengan benar di GitHub.
- [ ] Semua file source dan dokumentasi ada di repository.
- [ ] GitHub Actions workflow sudah diperiksa.
- [ ] Tidak ada password pribadi, token, atau file `.env` yang ter-push.
- [ ] Klaim di CV sesuai hasil nyata.

## Cara menuliskan di CV
Setelah project benar-benar dijalankan dan diunggah, kamu bisa menulis:

**Playwright QA Automation Portfolio**
- Developed UI functional automation tests using Playwright Test and JavaScript.
- Implemented Page Object Model (POM) to improve test maintainability.
- Automated login validation, inventory checks, cart interaction, and product sorting.
- Configured HTML reporting, failure artifacts, and GitHub Actions CI workflow.

Tambahkan link repository GitHub kamu. Jangan mencantumkan angka pass rate atau klaim CI berhasil sebelum ada hasil aktual yang mendukungnya.

## Catatan
Project ini menggunakan website latihan publik SauceDemo. Ini adalah demonstrasi keterampilan automation, bukan bukti pengujian aplikasi produksi atau sistem perbankan.
