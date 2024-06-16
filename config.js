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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_02_30_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEzLFxuICAgICAgICA4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAzMCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0LFxuICAgICAgICA2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDQzLFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcxLFxuICAgICAgICA4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICA3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZVVFGU010NUcwL0ZISVRuUFowYW56K1VTc3hjaGhOTkVwNm94bHA5WkNzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDbWxfT0MxclFmbUNzRVJ1bzdSTEZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA3YzBkMWI4LWQwYjItNDJhZC1hOTc1LTVmMDAyMmEzZGEyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDE0NyxcbiAgICAgIDk1LFxuICAgICAgMTUxLFxuICAgICAgOSxcbiAgICAgIDE2OCxcbiAgICAgIDE3MyxcbiAgICAgIDE2MCxcbiAgICAgIDEyNixcbiAgICAgIDEwNyxcbiAgICAgIDE2MSxcbiAgICAgIDM1LFxuICAgICAgNTMsXG4gICAgICAxMTYsXG4gICAgICAxNSxcbiAgICAgIDE5MCxcbiAgICAgIDQzLFxuICAgICAgMTgyLFxuICAgICAgNzgsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAxOTYsXG4gICAgICAyMDMsXG4gICAgICAxODcsXG4gICAgICAxNDQsXG4gICAgICAyMSxcbiAgICAgIDEwNSxcbiAgICAgIDE2NSxcbiAgICAgIDIxMixcbiAgICAgIDEwOSxcbiAgICAgIDQ0LFxuICAgICAgMTIsXG4gICAgICAyMzcsXG4gICAgICA5LFxuICAgICAgMjMxLFxuICAgICAgODYsXG4gICAgICAyMjgsXG4gICAgICAxNDQsXG4gICAgICAyLFxuICAgICAgMTk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNWOFFWTjEzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzQxNjQzOTM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNyeXN0YWxsaW5lXCIsXG4gICAgXCJsaWRcIjogXCIxOTQyMzE2MjQ4MjY5NTE6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTGNsYWdERUxHY3ViTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFiN1BQMFYxeTkzelQwWUlsQnFxK0pTMSs1T2dPcUVsK25tUGVyaGZoQU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMkgzVkhJeWEzcDVLN2JGaGpQbzlhRkd0akZuZmViL2xjdDFxODFvZCtaUVZkMlVtUFVxUTJxYmMrQzFHazFuVzlVSkdmb2pwaEkvM0tLbG44alQ2Z1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicWVPSTJVb0VYY2lBbkZOVTlBYVN2L1diR215SlhJNVFuR0hyUml2cVBEVWtMeUJLME9peTBFSFN2b01tZHV2R3AwRGw4TnFQaGFsWEF4NHVqN1FLQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTM0MTY0MzkzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg1MDUwMTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGaXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZpcy5qc29uIjogIntcImtleURhdGFcIjpcIkJNbEFLdENSa1NkVlduOEtHeUZ2OHBCQStUd3JPd1lEeDl4NzlxSDZBZFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODg5NTQ4MzcwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1MDUwMTUyNTFcIn0iCn0=


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
