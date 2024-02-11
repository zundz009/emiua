module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✨..✨",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Tiện ích",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/K2YCQOp.mp4",
"https://i.imgur.com/lqyaRGL.mp4",
"https://i.imgur.com/6LtOy2f.mp4",
"https://i.imgur.com/V9qhftN.mp4",
"https://i.imgur.com/luw748o.mp4",
"https://i.imgur.com/0RgD0zJ.mp4",
"https://i.imgur.com/31oWDgf.mp4",
"https://i.imgur.com/sGuHy1x.mp4",
"https://i.imgur.com/B5GDyPa.mp4",
"https://i.imgur.com/9iSu9aa.mp4",
"https://i.imgur.com/S3Srowd.mp4",
"https://i.imgur.com/krBQTNU.mp4",
"https://i.imgur.com/fpcLYvM.mp4",
"https://i.imgur.com/hymqN5u.mp4",
"https://i.imgur.com/KEsmg0b.mp4",
"https://i.imgur.com/JtNsW12.mp4",
"https://i.imgur.com/M74pm8l.mp4",
"https://i.imgur.com/mjlhxpg.mp4",
"https://i.imgur.com/kSEJs6q.mp4",
"https://i.imgur.com/LE5rSAd.mp4",
"https://i.imgur.com/H4sgSzB.mp4",
"https://i.imgur.com/s6cIzAo.mp4",
"https://i.imgur.com/hJKVtpO.mp4",
"https://i.imgur.com/CRqLx2d.mp4",
"https://i.imgur.com/L5OXAqi.mp4",
"https://i.imgur.com/LE5rSAd.mp4",
"https://i.imgur.com/H4sgSzB.mp4",
"https://i.imgur.com/s6cIzAo.mp4",
"https://i.imgur.com/hJKVtpO.mp4",
"https://i.imgur.com/VAi8Dme.mp4",
"https://i.imgur.com/uupuSZm.mp4",
"https://i.imgur.com/PoNv0VP.mp4",
"https://i.imgur.com/n0wxAnZ.mp4",
"https://i.imgur.com/lvh9hrc.mp4",
"https://i.imgur.com/D6FeFHD.mp4",
"https://i.imgur.com/zhLqD8p.mp4",
"https://i.imgur.com/VAi8Dme.mp4",
"https://i.imgur.com/uupuSZm.mp4",
"https://i.imgur.com/n0wxAnZ.mp4",
"https://i.imgur.com/K2YCQOp.mp4",
"https://i.imgur.com/lqyaRGL.mp4",
"https://i.imgur.com/6LtOy2f.mp4",
"https://i.imgur.com/V9qhftN.mp4",
"https://i.imgur.com/luw748o.mp4",
"https://i.imgur.com/0RgD0zJ.mp4",
"https://i.imgur.com/31oWDgf.mp4",
"https://i.imgur.com/sGuHy1x.mp4",
"https://i.imgur.com/B5GDyPa.mp4",
"https://i.imgur.com/9iSu9aa.mp4",
"https://i.imgur.com/S3Srowd.mp4",
"https://i.imgur.com/krBQTNU.mp4",
"https://i.imgur.com/fpcLYvM.mp4",
"https://i.imgur.com/KWJyaS5.mp4",
"https://i.imgur.com/hzf94GY.mp4",
"https://i.imgur.com/hymqN5u.mp4",
];
  var callback = () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━━
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
👤 𝗧𝗲̂𝗻: Lầm Chánh Cường❤
🌹  𝗧𝘂𝗼̂̉𝗶: 2006
🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 19
🌺 Giới Tính: Nam
🍇 Sở Thích: Em
🔥Cân Nặng|Chiều Cao: 70kg/1m78
❤ Mối Quan Hệ: 🙈
🎀 Quê Quán: Đồng Nai
━━━━━━━━━━━━━━━━━━
*********✨✨********
🎭 𝗭𝗮𝗹𝗼: 0
🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/Lam.Chanh.Zun
━━━━━━━━━━━━━━━━━━
`,attachment: fs.createReadStream(__dirname + "/cache/ad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad.mp4")).on("close",() => callback());
   };
   //tự edit body nhá ...=thay thông tin 
   //Sen code lại th nên bớt soi 
   //cách lấy ảnh gắn ở trên 
   //B1 Truy cập https://imgur.com chọn newpost
   //B2 Gắn ảnh từ máy tính lên đó hay điện thoại cx đc tùyq   //B3 Copy link như trên rồi thêm .jpg vào là done 
   //Chúc thành công