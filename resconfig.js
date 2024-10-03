// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 08 September 2024 JAM 00:00 WIB
// WEBSITE : autoresbot.com
// VERSION : 3.5.2
// =============================================



const path=require("path"),fs=require("fs"),chalk=require("chalk"),moment=require("moment-timezone");

const config = {
    botDestination  : 'group|private', // group |  private | both
    region       	: 'indonesia',
    resbot_version  : 'Super Bot',
    apikey_resbot   : 'cc1326412ee16272a5d8ef57', // apikey beli di autoresbot.com
    nomorsuperOwner : '6289601109799',
    grup            : 'https://wa.me/6289601109799',
    email           : 'Rizkybagol7@gmail.com',
    ig           	: '@kiki',
    ownername       : 'Alfian',
    botname         : 'Super Bot',
    packname        : 'Super Bot',
    sleep_game      : 60000, // waktu main tebak (1000 = 1 detik)
    limit_tunggu 	: 10, // ini menit = 10 menit setiap setelah claim
    MoneyMenangGame : 20,
    ratelimiter 	: 4, // detik
    prefix_custom   : ['&','!','.'],
    dalamdetik		: 5, // ini adalah waktu couldown dalamdetik
    chatmasuk 		: 5, // ini adalah jumlah chat maxsimum {dalamdetik}
    prefix 			: true,
    anticall        : true, // true = aktif || false = tidak aktif
    publik 			: true,
    audio_menu      : false,
    autoread 		: false,
    antitoxic 		: true,
    savekontak		: {
    format   	: 'Buyer @urutan - @tanggal @bulan @tahun',
    mulai 		: '1',
    },
    author          : `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nMUHAMMAD ALFIAN\nBot: 0896-0110-9799`,
    allmenu         : 'https://autoresbot.com/tmp_files/2a0521f5-326e-47af-9aba-7d7ab3d44f91.jpg',
    typeWelcome 	: '1', // ada 3 pilihan angka 1 = image pp user  2 = image welcome custom   || 3 = teks only
    icon_on			: '🔋', 
	icon_off		: '🪫',
    game 			: {
        tebakangka   : 'https://autoresbot.com/tmp_files/fd511838-ae60-43a6-ae89-4f2c80402252.jpg',
        tebaklontong : 'https://telegra.ph/file/f20bec6cbc011da4ac25d.jpg',
        tebakkalimat : 'https://autoresbot.com/tmp_files/498f2a17-8c1d-4382-9c51-d1027950ad63.jpg',
        tebaklirik   : 'https://telegra.ph/file/ec6362c91aaf837a6ec77.jpg',
        tebakkata    : 'https://telegra.ph/file/4cd10be17fd6c13303453.jpg',
        tebakbendera : 'https://telegra.ph/file/d982a966ba17ee035807c.jpg',
        tebakgambar  : 'https://telegra.ph/file/e9107d96769831a17ee21.jpg',
        tebaklagu    : 'https://telegra.ph/file/d96c459b9605d6fab4284.jpg'
    },
    PANEL            : {
        URL             : 'https://host.kikidotcom.my.id', // https://panel.contoh.com
        KEY_APPLICATION : 'ptla_4SKItGn1V38fecSq2fpjC1nuLO230lhKDoho9F4n6Oc', // ambil di panel : ptla_xxxxx
        SERVER_EGG      : '15',
        port_range      : '2000-2030',
        id_location     : '1', // id location -> ambil di panel
        cpu_default     : 75, // unlimited ganti 0
        disk_default    : 2010, // 5 gb || unlimited ganti 0
        description     : 'Owner : 089601109799',
        access          : 'owner' , // owner, premium,
    },
    BACKUP          : {
        autobackup : false, // true atau false
        autosendwa : true
    }
};



module.exports = config;

let file = path.resolve(__filename);
fs.watchFile(file,(()=>{fs.unwatchFile(file),console.log(`${chalk.greenBright.bold("UPDATE FILE "+file)} ${chalk.redBright.bold("PLEASE RESTART THIS SERVER")}`),delete require.cache[file],require(file)}));













/* 
---- PENJELASAN ------ 
 // 🟢 🔴
true : artinya aktif
false : tidak aktif

jadi kalau
anticall        : true 
// artinya bot lu gak bisa di telpon // kalo ada orang nelpon lansung di block



untuk link yang seperti https://telegra.ph/file/4cd10be17fd6c13303453.jpg
kalau mau di ganti silakan upload gambar kalian dulu ke website https://telegra.ph
lalu nanti salin url gambarnya 


KALAU MAU NANYA NANYA CHAT https://t.me/autoresbot_com admin/owner autoresbot

*/
