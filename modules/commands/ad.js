const fs = require("fs");
module.exports.config = {
name: "ad1",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "nnl",
  description: "adm",
  commandCategory: "Không cần dấu lệnh",
  usages: "Prefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("zun")==0 || 
event.body.indexOf("jkay")==0 ||
event.body.indexOf("Jkay")==0 ||
event.body.indexOf("ad")==0 ||
event.body.indexOf("Ad")==0 ||
event.body.indexOf("JKAY")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/FlAtNvc.mp4",
  ];
  var callback = () => api.sendMessage({body:`🧧𝐓𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 Hoàng Hậu🧧 \n😍Khuê Danh😍: Hồng Thi Thi\n🥺Chức Vị🥺: Hoàng Hậu\n🤷𝐓𝐢́𝐧𝐡 𝐜𝐚́𝐜𝐡🤷: Thông Minh, Thâm Hiểm\nLàn thu thủy, nét xuân sơn. Hoa ghen thua thắm, liễu hờn kém xanh.\n🤗𝐂𝐡𝐢𝐞̂̀𝐮 𝐜𝐚𝐨 🤗: 1m64\n🔰𝐂𝐚̂𝐧 𝐧𝐚̣̆𝐧𝐠🔰: 50kg\n🧐𝐒𝐢𝐧𝐡 𝐧𝐠𝐚̀𝐲🧐: 28/11/2000\n ============\n\n🍀𝐋𝐈𝐍𝐊 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 : https://www.facebook.com/ququdu1505\n\n🎉Bổn Cung là Hoàng Hậu\n🎉Dùng người thì không nghi ngờ, đã nghi ngờ thì không dùng\n🎉Người ở tâm không ở, miễn cưỡng giữ lại cũng vô dụng\n▬▬ι═══════ﺤ \n❤ Nếu gió hiểu ý hoa, xin đừng để hoa tàn 🧨\n🌸🍒🌸`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };