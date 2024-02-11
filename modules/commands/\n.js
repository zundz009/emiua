module.exports.config = {
  name: "",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Suhao",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "không phải lệnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["Ô tô thì đã có chỗ đỗ. Còn em thì đã đỗ trong tim anh!",
             "Đông lạnh chăn ấm nệm êm.\nKhông bằng một phút êm đềm bên em",
"Trời nay lạnh đến thế.\nLại còn lất phất mưa.\nTớ thích cậu nhiều thế.\nCậu đã động lòng chưa.",
"Mùa đông thì lạnh.\nÁo quần mong manh.\nĐiều em muốn nhất.\nLà gần bên anh.",
"Ngoài kia gió rét sương sa.\nVề đây có nắng, có nhà, có em",
"Son màu đỏ, cỏ màu xanh, trời trở lạnh.\nMình yêu dần đi em",
"Đông về cây buồn rụng hết lá.\nAnh buồn vì lạnh giá chẳng có ai",
"Em ơi gió lạnh gần kề, em mau thu xếp mà về bên anh",
"Chạy đâu cho khỏi mưa rào.\nChạy đâu cho khỏi sà vào tay anh",
"Nhìn nắng thì anh chói, nhìn em thì anh đói.",
"Anh ơi nắng ấm xa dần.\nĐông sang gió lạnh anh cần em thôi.",
"Ngoài đường trời mưa tầm tã, cho em ngã vào lòng anh được không?",
"Nhờ có nắng mới thấy cầu vồng.\nNhờ có em mới thấy màu hạnh phúc",
" Gió đưa cành trúc la đà\nChào em anh mới đứng đây từ chiều\nĐứng hoài chẳng thấy em đâu\nHoá ra em ở trong tim anh rồi.",
             "Nhờ có nắng mới thấy cầu vồng. Nhờ có anh mới thấy màu hạnh phúc."];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/uNGZ375.mp4",
"https://i.imgur.com/PGwf6KU.mp4",
"https://i.imgur.com/0r9Fsu8.mp4",
"https://i.imgur.com/mNFT2GZ.mp4",
"https://i.imgur.com/9DVwKop.mp4",
"https://i.imgur.com/EhlTWwm.mp4",
"https://i.imgur.com/NYCRCO1.mp4",
"https://i.imgur.com/D5SFk7A.mp4",
"https://i.imgur.com/Zy5683V.mp4",
"https://i.imgur.com/KxiA7SD.mp4",
"https://i.imgur.com/TlA3PRX.mp4",
"https://i.imgur.com/ryLXaBd.mp4",
"https://i.imgur.com/WuhsIoV.mp4",
"https://i.imgur.com/7fgx7wU.mp4",
"https://i.imgur.com/3KnsqPh.mp4",
"https://i.imgur.com/a834UXm.mp4"];
""
""
""
""
""
""
""
  var callback = () => api.sendMessage({body:`=== 「 𝗣𝗿𝗲𝗳𝗶𝘅 」  ===\n━━━━━━━━━━━━━━━━━━\nThính:「 ${know} 」\n» Cần hỗ trợ Bot ib https://www.facebook.com/lam.chanh.zun`,attachment: fs.createReadStream(__dirname + "/cache/sailenh.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/sailenh.mp4"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/sailenh.mp4")).on("close",() => callback());
   };