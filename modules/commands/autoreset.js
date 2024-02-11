module. exports. config = {
    name: "autoreset",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Thời gian",
    commandCategory: "Hệ thống",
    cooldowns: 5
}
module. exports. handleEvent = async function({ api, event, args, Users,Threads }) {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  var color = ["\x1b[33m", "\x1b[34m", "\x1b[35m", '\x1b[36m','\x1b[31m','\x1b[1m'];
  var more = color[Math.floor(Math.random() * color.length)];
  var idad = global.config.ADMINBOT;    
  console.log('\x1b[36m'+ '🕓 TIME 🕓: '+ more + timeNow + '\x1b[31m' + ' ➣ ' + '\x1b[0m' +  thu)
  var seconds = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var timeRestart_1 = `23:59:${seconds}`
  //console.log(timeNowRestart)
  if ((timeNow == timeRestart_1) && seconds < 5 ) {
    for( let ad of idad) {
  setTimeout(() =>
          api.sendMessage(`[ 𝐁𝐎𝐓 𝐂𝐔𝐓𝐄 ] - 𝗔𝗿𝗮 𝗔𝗿𝗮 😖, b𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀ 🕓: ${timeNow}\nHoàng Thượng đang tiến hành khởi động lại ☢️`,ad, () =>process.exit(1)), 1000);
    }
    }
}
module. exports. run = async  ({ api, event, args }) => {
      const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
        api.sendMessage(`${timeNow}`, event.threadID)
}