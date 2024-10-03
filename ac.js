// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 08 September 2024 JAM 00:00 WIB
// WEBSITE : autoresbot.com
// VERSION : 3.5.2
// =============================================



const fs = require("fs"),
  chalk = require("chalk"),
  moment = require("moment-timezone");

global.mess = {
  success: "_*🤗 ˢᵘᶜᶜᵉˢ ~*_",
  admin: "ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ғᴏʀ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘs",
  owner: "_❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !_",
  superOwner: "_❗Perintah Ini Hanya Bisa Digunakan Oleh Super Owner !_",
  group: "_❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !_",
  private: "_❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !_",
  bot: "_🤖 Fitur Khusus Pengguna Nomor Bot !_",
  wait: "_⏳ Sedang Di Proses !_",
  error: "_🚫 Fitur Sedang Error !_",
  premium: "🚫 Fitur Khusus Premium!\n\n♨️ _Buy Premium Chat Owner_",
  notlink: "_Mana Linknya ❗_",
  gagal: "_🚫 Gagal kak!_",
  urlnotvalid: "_🚫 Link Tidak Valid_",
  ban: "_🚫 Akun Kamu Sudah Di Baned Dari Penggunaan Bot Ini_",
  response_failed:
    "_🚫 *Response Ke Server Gagal Coba Ketik .updatebot untuk memperbaiki masalah*_\n\n_Apabila Butuh Bantuan Silakan Hubungi_\nhttps://t.me/autoresbot_com",
  promote_admin: "Berhasil dijadikan admin",
  demote_admin: "",
  notGroup: "Buat Di Group Ya Kak!",
  botNotAdmin: "Jadikan Bot Admin untuk menggunakan fitur ini",
  userNotAdmin: "ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs !!",
  antispam1:
    "_Peringatan: Jangan mengirim chat spam. Anda akan di kick dari grup jika melanjutkan spam._",
  antispam2: "_Kamu akan di kick karena spam_",
};

global.singlemess = {
  mute: "_Bot berhasil dimute di grub ini_",
  unmute: "_Bot telah diunmute di grup ini_",
  antilink_notAdmin: "「 *ANTILINK TERDETEKSI* 」 BOT NOT ADMIN",
  antilinkwa_notAdmin: "「 *ANTILINK WA TERDETEKSI* 」 BOT NOT ADMIN",
  antigame:
    "_Tidak Dapat Bermain Game_ \n\n_Fitur Game Telah Di Nonaktifkan Untuk Group Ini_",
  antibadword:
    "1x ʏᴏᴜ ᴛᴏxɪᴄ ᴀɢᴀɪɴ ɪ ᴡɪʟʟ ʀᴇᴍᴏᴠᴇ ʏᴏᴜ ғʀᴏᴍ ɢʀᴏᴜᴘ",
  kickmember: "ᴘᴇʀɪɴᴛᴀʜ ᴅɪ sᴇᴛᴜᴊᴜɪ\nᴅᴏɴᴇ ʀᴇᴍᴏᴠᴇ",
  open_grub: "sᴜᴄᴄᴇs ɢʀᴏᴜᴘ sᴛᴀᴛᴜs ᴛᴇʀʙᴜᴋᴀ 「 🔓 」",
  close_grub: "sᴜᴄᴄᴇs ɢʀᴏᴜᴘ sᴛᴀᴛᴜs ᴛᴇʀᴛᴜᴛᴜᴘ 「 🔒 」",
  antisekalilihat: "_「ᴏɴ」",

  antilinkv1_detek: "",
  antilinkv2_detek: "",
  antilinkv3_detek: "",
  antilinkwa_detek: "",
  antilinkwa2_detek: "",
  antivirtex_detek: "ᴍɪʀɪᴘ ᴠɪʀᴛᴇx ᴊᴀᴅɪ sᴀʏᴀ ᴋɪᴄᴋ ᴀᴊᴀ ᴅᴇʜ",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file),
    console.log(`${chalk.greenBright.bold(`UPDATE FILE ${__filename}`)}`),
    delete require.cache[file],
    require(file);
});
