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



global.devs = "94719845166" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94719845166";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_15_27_03_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTExLFxuICAgICAgICAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidmdHN1diL3E3cUNIODZkL1hrZXhSdER5RW95M0I4SlE0ZmY4YnNUS2NxOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidnpWSVZESzJRZnVzYmlsRlNMb2VOd1wiLFxuICBcInBob25lSWRcIjogXCI5MTg1NTUwMC1hMTExLTQyYjItODcxNy1lYzY1MDY0OTJlYWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAxMTQsXG4gICAgICAzMixcbiAgICAgIDM4LFxuICAgICAgMjIzLFxuICAgICAgMjA2LFxuICAgICAgMzgsXG4gICAgICAyMDMsXG4gICAgICA2MCxcbiAgICAgIDEzNixcbiAgICAgIDEwNCxcbiAgICAgIDIxLFxuICAgICAgMjQxLFxuICAgICAgMjAyLFxuICAgICAgNCxcbiAgICAgIDIzNCxcbiAgICAgIDE4NCxcbiAgICAgIDEyMSxcbiAgICAgIDM1LFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICAzMyxcbiAgICAgIDIyLFxuICAgICAgNjIsXG4gICAgICAxNzEsXG4gICAgICAzOSxcbiAgICAgIDg5LFxuICAgICAgMTQ5LFxuICAgICAgNzksXG4gICAgICAxMzYsXG4gICAgICAxNDksXG4gICAgICA2NCxcbiAgICAgIDYsXG4gICAgICA0NyxcbiAgICAgIDE2MSxcbiAgICAgIDI0MixcbiAgICAgIDgwLFxuICAgICAgMjExLFxuICAgICAgMTMzLFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjRWOUtYSzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE5ODQ1MTY2OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5LqX8J2XmyAg8J2XmCDwnZemIPCdl5sg8J2XlCDwnZeh8JKGnOC8u++jv1wiLFxuICAgIFwibGlkXCI6IFwiMTU5NDc3MzM2ODAxNjk6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3UxOHEwREVMckRzYjRHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsWEJIMzdGOFFuL0VRWU9hMlF0SkI1UmFCQ1Y3Q2N5R0NSekgzWjJvZUYwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJLM21VY1FSbjE4bDBqZ214aEhIYiticU5GRHA3a0E5RkRpZDNOOUs3bGZHSFMxeUZRN1M3T3FhOVd0Q1dHWis0c2sxSHZrZC80UGdIbHBoWmdtL0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVlTmlETVp0VWZUMy9yKzRFRG1pQTJJUklMcmVHZjdCZE14ZDFNVlpCcC9oZDJwN1NZK0RpVTNoZWFOdmF2TWNhMnU0UTBaRDJxdGJRUUR0cSs3K0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzE5ODQ1MTY2OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTQ0NzYxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9PTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT09MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiekM0QTVHVWhXUHVNdndCNVVCb2c1Tzl1Y2VCa3BrWnJEWlMxNHZPRDZlOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MDE1NTI4MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
