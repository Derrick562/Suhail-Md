const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0534164393";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_24_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTksXG4gICAgICAgIDQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxLFxuICAgICAgICA4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDYxLFxuICAgICAgICA5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMjI1LFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInlFSkJZdVJFd1o1azlhNHFnYnhRUUJDWVNKSW9QSmFmY2R1dGN3NURFRk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNyQVpwMFd1UjBlUE13YkNjSDFzd2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjc3Y2U5YjEtMzY0Zi00N2VlLTkyMTAtZGViNjhmZDkzNTYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDE2NyxcbiAgICAgIDIxNCxcbiAgICAgIDIzNCxcbiAgICAgIDI2LFxuICAgICAgNjMsXG4gICAgICAyMTUsXG4gICAgICAxMDAsXG4gICAgICAzNixcbiAgICAgIDE2MSxcbiAgICAgIDEyOSxcbiAgICAgIDIyMixcbiAgICAgIDExOCxcbiAgICAgIDI0MixcbiAgICAgIDEwMixcbiAgICAgIDEyLFxuICAgICAgMzcsXG4gICAgICAxNTcsXG4gICAgICA3MCxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAxMzQsXG4gICAgICAyMTEsXG4gICAgICAxOTIsXG4gICAgICAxMzUsXG4gICAgICAxNTksXG4gICAgICAxNDksXG4gICAgICAyNDksXG4gICAgICAxODcsXG4gICAgICAxOTAsXG4gICAgICAxMzYsXG4gICAgICAzNSxcbiAgICAgIDE2NixcbiAgICAgIDY4LFxuICAgICAgNjMsXG4gICAgICA5OCxcbiAgICAgIDU3LFxuICAgICAgMjUzLFxuICAgICAgMTY1LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhOM1ZUMzdXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzQxNjQzOTM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNyeXN0YWxsaW5lXCIsXG4gICAgXCJsaWRcIjogXCIxOTQyMzE2MjQ4MjY5NTE6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLR3Uzc1VLRU0zQ3VyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFiN1BQMFYxeTkzelQwWUlsQnFxK0pTMSs1T2dPcUVsK25tUGVyaGZoQU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVUNUdkFkNGI4MlZVWTVtT2Nma3ZmQmxIVS9EVHE3MHo3Y1RwTkZjUnkyS1k2R3pRRmFqM0FzbXZoSFVqblhEMmFDZUY5R3VEekFKSjdDcmxLeE4raEE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2pabWFSclpqeXZQa0JmZjVJOG5EdlZhWWxWSWxVK3E2TE5LSE9HRjMyU3NTZ2FGSVdMS1ZrblcxL3N4bSs1aE56S2hZK0V3dmJEUHBNSGQzaHJuQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTM0MTY0MzkzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg1MjYyOTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIK0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUgrRy5qc29uIjogIntcImtleURhdGFcIjpcIlRKVCsvMnpvZEUwa1VmbVJicHA4cW9CSURGM05iM29jbi9KTVVDamhKQnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgzMDYwNDA2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NTI2MjkyMTAyXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
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

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























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
 
