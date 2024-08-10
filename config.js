//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237692950628";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-v2-session.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JwNktzTWNrN1g5YThGUzVpb1Uyd08xYXlYYlNWbnE4MTB3T2FaV3ZYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVh1clYvb0tXZ0xxS29VWGZlZmZqUEZ6SlVRQk9JS0k0d3loUHBRb1AyWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZS2tXMTBnd1hlbk1uRXFJdGU1cUxSYWJsbW9vOVZ0cHNVN0JjN3l2UW5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4TmUzRTV6MXpIaDFwRS8wM3ErNzNEZ1psc29tNHZqZVZteUMyYVZYVkJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEL2k5SS9hVTRkSXE0QU54U2FYVFZrL2QxT0VLZjdRR29GY3gyQmQ2RXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhBckx1MmtLRkhxcmVZbmRRT3dwd01jdWk5aCttVlBydXU4d1JKWktWa1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5VdTNvbG5HOTNyQVRKQ0R2V2xoU0RsdWtHdmVQRzJUNGJPVTVxcE5HST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiai96SzRvWjlVUWU3NnhSazMrdVFld0drK3VSWklXV0VudDJ4WWh1MFFsWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhpcjFZUEdUa2hEbm9YN1V3RDFkcDU3VTd0ZFFMT1M4Uk5CT0F4ZnV1ZVE2MExITHBUKy9IdnEvNEtBc0dKZEFqbVFaL2ZYRzNBRVBSQjJUSXREOWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiIzUkdYOU03Z0FqNDVLb3k5WDVKK0RCZjE5TExCdnp3cjRCTkJCQjZLQ2NnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY5Mjk1MDYyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwMjQ3RkU5NkY2MUIyNDBDMzU5RjFEMUM4NjZDRDc5QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMzAyNzI3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2OTI5NTA2MjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUVBODU0NjVDQjk1NTRDQUZDRDRGQkJERDRDRkFFOUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzMwMjcyOH1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWkg4bGNxNFlSWUNPZkxOTXo2ektNdyIsInBob25lSWQiOiJlNTBiNDM4YS01Mjk3LTQxMjEtOTMxNC00NDIyZDRkNmYzOTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5zVlcySklhTXJoalVIUlEzVTlsWWsxNUFVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIdjdoZE5SUjFMelZZYlRZRnFjT043bVY5dz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0M1BLQ0M0TCIsIm1lIjp7ImlkIjoiMjM3NjkyOTUwNjI4OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRheXJvbvCfmIEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05QVnd2c0ZFTGVHM3JVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVYSjdlWGZCNDJhc251VEdnL0JxZDVqM1FOSGtSalZNS2plSUc5SWNIbTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlM2a0JZbG5SOW52TDBGMW43VmRnby9TdlMycGdITklCTjRkMzVnOHRzczJwVjBGMFRJLzV3ZE1jRGVwTFhwRTBRc083akVPd0V0VHVxdm9UZXhqOUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvanpVU1haUlYvczRBUFRyWkFLM0hPb2I1SDJvc0xBU0JrN2Uzd2pwdThhckFGMGJaYjdUOVkvYk4zM0NkUzZMTmFmdVJYeDdPZ1BCYlZXVWc4M1ZpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5Mjk1MDYyODoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWRnllM2wzd2VObXJKN2t4b1B3YW5lWTkwRFI1RVkxVENvM2lCdlNIQjV0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMzAyNzI1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1WMSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
