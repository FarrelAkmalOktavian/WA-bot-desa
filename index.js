const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

function salamOtomatis() {
    const jam = new Date().getHours();

    if (jam >= 5 && jam < 11) return "Selamat pagi ☀️";
    if (jam >= 11 && jam < 15) return "Selamat siang 🌤️";
    if (jam >= 15 && jam < 18) return "Selamat sore 🌅";
    return "Selamat malam 🌙";
}

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ WhatsApp Bot Desa Burikan siap digunakan!');
});

let state = {};

client.on('message', message => {
    if (message.body.toLowerCase() === 'menu') {
    state[message.from] = "menu1";
    const salam = salamOtomatis();
    message.reply(
        `${salam}! 👋 *Selamat datang di WA Bot Desa Burikan!*\n\n` +
        "Silakan pilih menu:\n" +
        "1️⃣ Informasi Administrasi\n" +
        "2️⃣ Jadwal Pelayanan Desa\n" +
        "3️⃣ Informasi Bantuan Sosial\n" +
        "4️⃣ Susunan Organisasi dan Tata Kerja\n" +
        "5️⃣ Kontak Perangkat Desa\n" +
        "6️⃣ Tentang Desa Burikan\n" +
        "7️⃣ Website Desa Burikan\n\n" + 
        "Ketik angka sesuai pilihan Anda."
    );  
    return;
    }

    if (message.body === '1') {
        message.reply(
            "📄 *Informasi Layanan Administrasi Desa*\n\n" +
            "Berikut layanan yang tersedia:\n" +
            "*1.1* Surat Domisili\n" +
            "*1.2* Surat Keterangan Usaha\n" +
            "*1.3* Surat Kematian\n" +
            "*1.4* Surat Beda Nama\n" +
            "*1.5* Surat Pengantar Nikah\n" +
            "*1.6* Pembuatan/Perubahan KK\n" +
            "*1.7* Pengajuan KTP-EL\n" +
            "*1.8* Pengajuan KIA\n" +
            "*1.9* Pengajuan Akta Kelahiran\n" +
            "*1.10* Pengajuan Akta Kematian\n" +
            "*1.11* Pengajuan Perpindahan Antar Kabupaten/Provinsi\n" +
            "*1.12* Pengajuan Kedatangan dari Luar Kabupaten Masuk ke Kabupaten Klaten\n" +
            "Ketik angka sesuai pilihan Anda seperti conotoh: *1.1*\n" +
            "(Surat Keterangan Lain Bisa Langsung Datang ke Balai Desa.)\n" +
            "🕒 Jam Pelayanan: Senin–Kamis (08.00–13.00), Jum'at (08.00-11.00)\n\n" +
            "👉 Ketik *menu* untuk kembali ke menu utama."
        );
    }

    //terusan dari Layanan Administrasi Desa
    if (state[message.from] === "menu1" && message.body === '1.1') {
    message.reply(
        "📌 *Persyaratan Surat Domisili:*\n\n" +
        "• KK atau KTP Pemohon\n" +
        "• Mengisi formulir di Balai Desa\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.2') {
    message.reply(
        "📌 *Persyaratan Surat Keterangan Usaha:*\n\n" +
        "• KK atau KTP Pemohon\n" +
        "• Menyampaikan Jenis Usaha, Lokasi Usaha, Bank yang Dituju, dan Lama Usaha\n" +
        "• Mengisi formulir di Balai Desa\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.3') {
    message.reply(
        "📌 *Persyaratan Surat Kematian:*\n\n" +
        "• Surat Layu-Layu atau Keterangan Tanggal Kematian\n" +
        "• KK yang Meninggal\n" +
        "• KTP Pelapor\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.4') {
    message.reply(
        "📌 *Persyaratan Surat Pengantar Nikah:*\n\n" +
        "• Menghubungi Bu Dwi (0881-3980-121)\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.5') {
    message.reply(
        "📌 *Persyaratan Surat Beda Nama:*\n\n" +
        "• Dokumen yang Namanya Berbeda yang Dilaporkan\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.6') {
    message.reply(
        "📌 *Persyaratan Pembuatan atau Perubahan KK:*\n\n" +
        "• Kartu keluarga\n" +
        "• Dokumen Pendukung (Akta Kelahiran/Buku Nikah/Akta Cerai/Akta Kematian/Ijazah dll)\n" +
        "• Surat Keterangan Kehilangan dari Kepolisian (jika KK hilang)\n" +
        "• Mengisi formulir F-1.01 untuk permohonan KK baru\n" +
        "• Mengisi formulir F-1.06 untuk permohonan perubahan elemen data\n" +
        "• Mengisi formulir F-1.03 untuk permohonan perpindahan antar Desa/Kelurahan/Kecamatan\n" +
        "• KTP Elektronik\n" +
        "• Mengisi SPTJM (Surat Pernyataan Tanggung Jawab Mutlak) perkawinan/perceraian belum tercatat (F-1.05), jika tidak dapat melampirkan kutipan akta perkawinan atau perceraian\n" +
        "• Surat pernyataan bersedia menerima sebagai anggota keluarga dan surat kuasa pengasuhan anak dari orang tua/wali untuk permohonan numpang KK bagi anak usia di bawah 17 tahun\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.7') {
    message.reply(
        "📌 *Persyaratan Pengajuan KTP-EL:*\n\n" +
        "• Surat Layu-Layu atau Keterangan Tanggal Kematian\n" +
        "• KK yang Meninggal\n" +
        "• KTP Pelapor\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.8') {
    message.reply(
        "📌 *Persyaratan Pengajuan KIA:*\n\n" +
        "• Kartu keluarga\n" +
        "• Akta Kelahiran\n" +
        "• Pas foto berwarna ukuran 4x6 bagi anak usia di atas 5 tahun\n" +
        "• KIA Asli yang sudah dipotong pada bagian tanda tangan (untuk ajuan KIA Rusak/Perubahan Elemen Data)\n" +
        "• Surat Kehilangan dari Kepolisian (untuk ajuan KIA hilang)\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.9') {
    message.reply(
        "📌 *Persyaratan Pengajuan Akta Kelahiran:*\n\n" +
        "• Surat Keterangan Kelahiran dari Rumah Sakit/Dokter/Bidan Penolong\n" +
        "• Kartu Keluarga\n" +
        "• Buku Nikah/Akta Perkawinan Orang Tua (lengkap dengan tanda tangan pejabat yang berwenang)\n" +
        "• Mengisi formulir F-2.01 (Formulir Pelaporan Pencatatan Sipil Di Dalam Wilayah NKRI)\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.10') {
    message.reply(
        "📌 *Persyaratan Pengajuan Akta Kematian:*\n\n" +
        "• Surat Keterangan Kematian dari Rumah Sakit/Dokter/Desa/Kelurahan\n" +
        "• KTP-el jenazah atau KK yang tertera NIK jenazah\n" +
        "• Mengisi formulir F-2.01 (Formulir Pelaporan Pencatatan Sipil Di Dalam Wilayah NKRI)\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.11') {
    message.reply(
        "📌 *Persyaratan Pengajuan Perpindahan Antar Kabupaten atau Provinsi:*\n\n" +
        "• Kartu Keluarga\n" +
        "• KTP Elektronik\n" +
        "• Surat Nikah bagi yang sudah menikah, Akta Cerai bagi yang Cerai Hidup, Akta Kematian pasangan bagi yang Cerai Mati\n" +
        "• Akta Kelahiran\n" +
        "• Mengisi formulir F-1.03 (formulir Pendaftaran Perpindahan Penduduk)\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (state[message.from] === "menu1" && message.body === '1.12') {
    message.reply(
        "📌 *Persyaratan Pengajuan Kedatangan dari Luar Kabupaten Masuk ke Kabupaten Klaten:*\n\n" +
        "• Surat Keterangan Pindah Warga Negara Indonesia (SKPWNI) dari Kabupaten/Kota Asal\n" +
        "• Dokumen pendukung (Akta Kelahiran/Buku nikah/Akta Cerai/Akta Kematian/Ijazah dll)\n" +
        "• KK yang ditumpangi bila Pendatang Numpang KK\n" +
        "• Mengisi Formulir F-1.01 (Formulir Biodata Penduduk WNI)\n" +
        "• Pasfoto berwarna ukuran 4x6 bagi anak usia 6 s/d 16 tahun (untuk pencetakan KIA)\n" +
        "• Surat pernyataan bersedia menerima sebagai anggota keluarga dan Surat kuasa pengasuhan anak dari orang tua/wali untuk permohonan numpang KK bagi anak usia di bawah  17 tahun\n\n" +
        "👉 Ketik *menu* untuk kembali ke menu utama."
    );
    state[message.from] = null;
    return;
    }

    if (message.body === '2') {
        message.reply(
            "🗓️ *Jadwal Pelayanan Desa Burikan*\n" +
            "- Administrasi: Senin–Jumat (08.00–13.00), Jum'at (08.00-11.00)\n" +
            "- Posyandu: Rutin setiap bulan dengan tanggal berbeda pada setiap dusunnya\n" +
            "- Kerja Bakti: Minggu pertama setiap bulan\n\n" +
            "👉 Ketik *menu* untuk kembali ke menu utama."
        );
    }

    if (message.body === '3') {
        message.reply(
            "💰 *Informasi Bantuan & Program Sosial*\n\n" +
            "Dana bantuan BLT tersedia setiap bulan untuk masyarakat miskin ekstrim\n\n" +
            "👉 Ketik *menu* untuk kembali ke menu utama."
        );
        return;
    }

    if (message.body === '4') {
        message.reply(
            "🏢 *Susunan Organisasi dan Tata Kerja Desa Burikan*\n\n" +
            "Kepala Desa: Surata\n" +
            "Sekretaris Desa: Ari Kurniawan\n" +
            "Kasi Pemerintahan: Ayu Pratiwi, S.Psi\n" +
            "Kaur Keuangan: Dwi Nurkhasanah, S.Pi\n" +
            "Kepala Dusun 1: Muhammad Isa\n" +
            "Kepala Dusun 2: Murniningsih, A.Md\n" +
            "Kepala Dusun 3: Paryono\n\n" +
            "👉 Ketik *menu* untuk kembali ke menu utama."
        );
        return;
    }

    if (message.body === '5') {
        message.reply(
            "☎️ *Kontak Perangkat Desa*\n\n" +
            "Kepala Desa: 0815-6789-3810 (Pak Surata)\n" +
            "Sekretaris Desa: 0815-6789-4329 (Pak Ari)\n" +
            "Kasi Pemerintahan: 0882-2753-9296 (Bu Ayu)\n" +
            "Kaur Keuangan: 0881-3980-121 (Bu Dwi)\n" +
            "Kepala Dusun 1: 0856-0102-2821 (Pak Isa)\n" +
            "Kepala Dusun 2: 0816-4246-049 (Bu Ning)\n" +
            "Kepala Dusun 3: 0881-0242-41498 (Pak Paryono\n\n" +
            "👉 Ketik *menu* untuk kembali ke menu utama."
        );
        return;
    }

        if (message.body === '6') {
        message.reply(
            "🏡 *Tentang Desa Burikan*\n\n" +
            "Desa Burikan merupakan salah satu desa yang berada di Kecamatan Cawas, Kabupaten Klaten, Jawa Tengah. Desa ini dikenal dengan suasana pedesaan yang asri, lingkungan yang masih alami, serta kehidupan sosial masyarakat yang harmonis. Hamparan sawah hijau yang luas, aliran irigasi yang tertata, dan pemandangan pegunungan di kejauhan menjadikan Desa Burikan memiliki potensi alam yang memukau dan khas pedesaan Jawa.\n\n" +

            "*1. Kondisi Geografis*\n" +
            "Wilayah desa berupa dataran rendah hingga sedang, didominasi lahan persawahan produktif. Sistem irigasi yang memadai menjadikan pertanian di desa ini subur dan dapat ditanami sepanjang tahun. Lingkungan desa dikelilingi pepohonan peneduh, sungai kecil, serta area perkampungan yang tertata rapi.\n\n" +

            "*2. Demografi Masyarakat*\n" +
            "Mayoritas masyarakat bekerja sebagai petani, buruh harian, pedagang lokal, dan pelaku usaha kecil. Ikatan sosial antarwarga kuat, tercermin dari budaya gotong royong dan tradisi keagamaan yang harmonis.\n\n" +

            "*3. Potensi Alam dan Wisata*\n" +
            "- Hamparan persawahan luas yang indah.\n" +
            "- Jalan akses ke tengah sawah.\n" +
            "- Pemandangan gunung di kejauhan.\n" +
            "- Suasana tenang dan udara segar.\n" +
            "Potensi ini dapat dikembangkan menjadi wisata alam, foto, trekking sawah, kuliner tradisional, atau edukasi pertanian.\n\n" +

            "*4. Ekonomi dan UMKM*\n" +
            "Masyarakat memiliki berbagai produk lokal seperti hasil pertanian, kerajinan rumah, makanan tradisional, dan UMKM kecil. Potensi ini dapat ditingkatkan melalui pemasaran digital, branding, dan kolaborasi komunitas.\n\n" +

            "*5. Infrastruktur Desa*\n" +
            "Desa memiliki jalan desa yang baik, balai desa, sarana ibadah, posyandu, sekolah dasar, serta saluran irigasi yang mendukung kegiatan pertanian.\n\n" +

            "*6. Nilai Budaya dan Sosial*\n" +
            "Desa Burikan masih menjaga tradisi budaya Jawa seperti selametan, bersih desa, dan seni tradisional. Masyarakat dikenal ramah, religius, dan menjunjung kebersamaan.\n\n" +

            "👉 Ketik *menu* untuk kembali ke menu utama."
        );
        return;
    }

    if (message.body === '7') {
        message.reply(
            "🔗 *Website Desa Burikan*\n\n" +
            "Untuk menuju ke website Desa Burikan, silahkan akses melalui tautan dibawah\n" +   
            "⬇️⬇️⬇️\n\n" +
            "https://burikan.cawas.klaten.go.id/\n\n" +
            "👉 Ketik *menu* untuk kembali ke menu utama."
        );
        return;
    }

    if (!['1','2','3','4','5','6','7'].includes(message.body)) {
        message.reply(
            "❗ *Maaf, pilihan tidak valid.*\n" +
            "Silakan ketik angka sesuai pilihan atau ketik *menu* untuk melihat daftar pilihan."
        );
    }

});

client.initialize();
