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
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_01_42_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA2LFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgODgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDk1LFxuICAgICAgICA2NixcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0LFxuICAgICAgICA2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI4LFxuICAgICAgICA3MixcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImk1Tm9aUzhPSXRrL2ROS2ZFYWJ1SlpEM0N4djFFbVdXRW5XNXZBMGZ3eEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJNdjJid0VBUTlxU2NZdElHX21Lb3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmFjZWIxZTYtZTUwZi00NjQ0LTg3NDktYTYzNTIzOWEyMGY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgMjQ3LFxuICAgICAgMjI5LFxuICAgICAgMTgyLFxuICAgICAgMjQ0LFxuICAgICAgMjM5LFxuICAgICAgMTc2LFxuICAgICAgMjA4LFxuICAgICAgNjIsXG4gICAgICAxOTIsXG4gICAgICAyMSxcbiAgICAgIDE5NCxcbiAgICAgIDEyNCxcbiAgICAgIDMwLFxuICAgICAgMjA1LFxuICAgICAgNjIsXG4gICAgICAxODMsXG4gICAgICA0OSxcbiAgICAgIDEwOSxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDgsXG4gICAgICAyMDksXG4gICAgICAyMTYsXG4gICAgICAxOTUsXG4gICAgICAyMjcsXG4gICAgICAyNDEsXG4gICAgICAyMjIsXG4gICAgICA2NSxcbiAgICAgIDUyLFxuICAgICAgMTk4LFxuICAgICAgMTAwLFxuICAgICAgMTk4LFxuICAgICAgNjUsXG4gICAgICA1MCxcbiAgICAgIDQyLFxuICAgICAgMTg2LFxuICAgICAgMTk1LFxuICAgICAgNjUsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWWlNYSDVHMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM0MTY0MzkzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDcnlzdGFsbGluZVwiLFxuICAgIFwibGlkXCI6IFwiMTk0MjMxNjI0ODI2OTUxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2ZQdmNRSEVJNkd1Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhYjdQUDBWMXk5M3pUMFlJbEJxcStKUzErNU9nT3FFbCtubVBlcmhmaEFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJobTN4dU9nQmZTZktwZFFVVEZIdFAyNmtSRUFpdEE3RlVTaWhsaHF1ZlJxdlQ1NUNIZTVTTDJ6UTJtcjdhdHdwTC9OT2Q5TEhWcWlkTHhhcndsNGdnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRWRk9LL2I5NDJPYnFwUjhwZGN2dTAvbXpuSXRFNVpoWi80RjVxMjNJZitscWdQNlpEMjVZWWtobDVMQ2JNeGdzdVZZRDlNcmtTSyt3dDBLeWtBdmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzNDE2NDM5MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTAyMTYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0ZqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRmouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJydVREakg2VHZ4QXRDU2hnNUtPZkllZ005N21WcGxXN251d0Y3ZmpUbE8wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMjI2NjQxNjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUwMjE2NjEyMFwifSIKfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
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
