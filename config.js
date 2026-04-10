const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk8xYUd3NGx5WEJaT2JOUnZDSGdDT0piTEdCWTdjRnJXVE5PSFM4T2dFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUl4M2JIR3liZ2RnbHdmMlBTb0pybHVpRGFxY0NMYXFuZEV6eTMwOFF3WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UFBKemVocVZOYzZVbHJwWFdmd0ZKSnZkWWM3ODFmUFhxQk5VYXExNUVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2RlBqQTd1dThmb0RGMFc1TWZqY09LVVN0Ui9PZGxCbk1wMDZFMHVpaVhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJIOHI0WUM1WHd3LzFYMU5sRSt0bEtBUFFheTVCK3BnbTZGKzl2YnVFbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhzaVRxek4xR1hqWGhUaXdGMHc2RklWWjR1U093NFV3ZVgvTmliaUVLRVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxRQmhGTnNwK1RzaXl1dEJYcmc3cGl3UU4vbndqbmJCdmJyOTltU3RGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzI4SVI5S2FmNGlyZXdra1J2c0tSalFPTnA1SzhtY0Jsb0Z0T1drNURXaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5ZTURjSXVPcU10bTVyNjcxVksxMGV2V2JHZ1U5K3d2L3ZKTUlUWDh1bGcvaGF6eUkwTEVPOWF4VnVSWlhpREpCMjhHUUxvWGpSNlV1MVQrWm1xdWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJDMkhLcUZvVDh4UThXQzdteHN0dldpczRrNG9aYVZ2OXBQdzdMbFlEVUdjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyODk3Njk4NzI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NUJDQTM4NzQwMDg5NzlBMTFDNDc4RDUwMTlFRTcwIiwic2VuZGVyTGlkIjoiMTU4MzgxMzE0Njk5NDUzOjFAbGlkIiwic2VuZGVyUG4iOiIyMjg5NzY5ODcyOUBzLndoYXRzYXBwLm5ldCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc1ODA2NDEzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMjg5NzY5ODcyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTA0NERFNDczM0NFMDE0NzkyNTlDN0ZGNTExMDM4MSIsInNlbmRlckxpZCI6IjE1ODM4MTMxNDY5OTQ1MzoxQGxpZCIsInNlbmRlclBuIjoiMjI4OTc2OTg3MjlAcy53aGF0c2FwcC5uZXQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NTgwNjQxM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQURFRUw1TUQiLCJtZSI6eyJpZCI6IjIyODk3Njk4NzI5OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JODrvCdkJHwnZCA8J2QjfCdkIAg8J2QkvCdkIfwnZCA8J2QjfCTg65cblxuXG7wk4OuXG5cblxuXG7wk4OuXG5cblxuXG7wk4OuXG5cblxuXG7wk4OuXG5cblxuXG7wk4OuXG5cblxuXG7wk4Ou8J2QkfCdkIDwnZCN8J2QgCDwnZCS8J2Qh/CdkIDwnZCN8JODriIsImxpZCI6IjE1ODM4MTMxNDY5OTQ1MzoxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTNJd2V3QkVMelA0czRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiczdqTjMvUndyeDlVbTJpVlYwUXFIZVZtbnZnb1FXTjR0aDJSTUFVbGNrRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidTNySXc2M2w3U2tUL2lUYkRGcEhLZjhNZzlPeDF3U0FjN1U2TW1zZldXTDFoNFNYTlU3ZjVxOW5lN0FEcVJ5Q2lqcE1QTDNPNDJSYVhSNm42aDh3Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9lTU0rZWlESE5lY1FmMndMNXdORHMrRmtHbzUxOEYwVXo3L0RFaGdudkhxejl5K1dMTUdlaWhTV2JJb05MZE11OWFuVERoRzBDa0MxY00xbGN2aWd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI4OTc2OTg3Mjk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiTzR6ZC8wY0s4ZlZKdG9sVmRFS2gzbFpwNzRLRUZqZUxZZGtUQUZKWEpCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWdnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzU4MDY0MTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0g1In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true or false for auto voice reply
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/sx07qa.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x2qij1.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 
ANTI_CALL: process.env.ANTI_CALL || "false"
// make it true for auto call reject 
};
