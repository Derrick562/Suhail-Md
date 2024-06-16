const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0534164393";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_24_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICA2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MixcbiAgICAgICAgMTA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5wUWNIa0FhbXplaFp4M241M0RkZ3M3QzFFTjRiZTBVSG1IdXBEeEZXeHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJpdnpGMWpEU0JPQVBsa3F0aW44RGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjk3NjcyYWMtMGQxMC00YzdiLWE3MDQtZjE1N2M2N2U3YTE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDEyOCxcbiAgICAgIDg1LFxuICAgICAgMTQxLFxuICAgICAgMjQ3LFxuICAgICAgMjAsXG4gICAgICAyLFxuICAgICAgMjUwLFxuICAgICAgMTA2LFxuICAgICAgOTMsXG4gICAgICAyOCxcbiAgICAgIDE2NCxcbiAgICAgIDM1LFxuICAgICAgMTUwLFxuICAgICAgMTcsXG4gICAgICA4OCxcbiAgICAgIDIyNixcbiAgICAgIDUwLFxuICAgICAgOTUsXG4gICAgICAxNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMjQyLFxuICAgICAgODUsXG4gICAgICA1OSxcbiAgICAgIDIwOSxcbiAgICAgIDI1MyxcbiAgICAgIDExMSxcbiAgICAgIDY3LFxuICAgICAgMTkyLFxuICAgICAgMTU4LFxuICAgICAgMTk5LFxuICAgICAgMTYxLFxuICAgICAgNDQsXG4gICAgICAyMzcsXG4gICAgICAyNSxcbiAgICAgIDE5OSxcbiAgICAgIDE2OCxcbiAgICAgIDIzMixcbiAgICAgIDksXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4R0pMQVczMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM0MTY0MzkzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDcnlzdGFsbGluZVwiLFxuICAgIFwibGlkXCI6IFwiMTk0MjMxNjI0ODI2OTUxOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0d1M3NVS0VNdmV1ck1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhYjdQUDBWMXk5M3pUMFlJbEJxcStKUzErNU9nT3FFbCtubVBlcmhmaEFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFBM1ZUcEwxcERib2czU0k2Yi9tWndOVzNKOXYyMVZiaTBGUExPUlo3ZFdOMklwMGNJWUJpOExRN0dtZXNKYTM2TEh4VC9ad0UrMW9VSnhyNXZuaGlBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFDUUtpUm1HdTgycHNBQjFCd0JyNEdtOTRXZWZHN0ljSExpTDdVZnlaVGMwaUZPdE5WcEpKNFdXbEtPbVduSHJyZFZCTjI2MXdYWGtBcHNSaVpNNUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNDE2NDM5Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTI5ODcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSCtHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIK0cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUSlQrLzJ6b2RFMGtVZm1SYnBwOHFvQklERjNOYjNvY24vSk1VQ2poSkJzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4MzA2MDQwNjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUyNjI5MjEwMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
