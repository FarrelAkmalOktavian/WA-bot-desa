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


client.on('message', message => {
    if (message.body.toLowerCase() === 'menu') {
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
            "- Surat Domisili\n" +
            "- Surat Keterangan Usaha\n" +
            "- Surat Kematian\n" +
            "- Surat Pengantar RT/RW\n\n" +
            "🕒 Jam Pelayanan: Senin–Kamis (08.00–13.00) Jum'at (08.00-11.00)"
        );
    }

    if (message.body === '2') {
        message.reply(
            "🗓️ *Jadwal Pelayanan Desa Burikan*\n" +
            "- Administrasi: Senin–Jumat (08.00–13.00) Jum'at (08.00-11.00)\n" +
            "- Posyandu: Tanggal 5 setiap bulan\n" +
            "- Kerja Bakti: Minggu pertama setiap bulan"
        );
    }

    if (message.body === '3') {
        message.reply(
            "💰 *Informasi Bantuan & Program Sosial*\n\n" +
            "*belum ada informasi bantuan & program sosial*" 
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
            "Kepala Dusun 3: Paryono"
        );
        return;
    }

    if (message.body === '5') {
        message.reply(
            "☎️ *Kontak Perangkat Desa*\n\n" +
            "Kepala Desa: 0815-6789-3810\n" +
            "Kasi Pemerintahan: 0882-2753-9296\n" +
            "Kaur Keuangan: 0881-3980-121\n" +
            "Kepala Dusun 1: 0856-0102-2821\n" +
            "Kepala Dusun 2: 0816-4246-049\n" +
            "Kepala Dusun 3: 0881-0242-41498"
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
            "https://burikan.cawas.klaten.go.id/"
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
