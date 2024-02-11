module.exports.config = {
  name: "tools",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "JRT",
  description: "tools",
  commandCategory: "Hệ thống admin-bot",
  usages: "tools",
  cooldowns: 0
};
const totalPath = __dirname + '/cache/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");
function handleByte(byte) {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  let i = 0, usage = parseInt(byte, 10) || 0;

  while(usage >= 1024 && ++i){
    usage = usage/1024;
  }

  return(usage.toFixed(usage < 10 && i > 0 ? 1 : 0) + ' ' + units[i]);
}

function handleOS(ping) {
  var os = require("os");
  var cpus = os.cpus();
  var speed, chips;
  for (var i of cpus) chips = i.model, speed = i.speed;
  if (cpus == undefined) return;
  else return msg = 
  `[⚜️] Ping: ${Date.now() - ping}ms.\n\n`;

}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function({ api, args, event, Users,handleReply,permssion, utils, Threads, Currencies, client, __GLOBAL, reminder  }) {
  var moment = require('moment-timezone');
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  const axios = require("axios");
  const fs = require('fs-extra');
  const request = require('request');
  const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
  const { threadID, senderID, messageID, type, mentions } = event;
   return api.sendMessage({body: `[⚜️] HỖ TRỢ SETTING BOT [⚜️]\n\n[⚜️] === |ADMIN| === [⚜️]\n[1]➜ Cập nhật dữ liệu box\n[2]➜ Cập nhật dữ liệu người dùng\n[3]➜ Chạy lại hệ thống bot\n[4]➜ Đăng xuất tài khoản Facebook\n[5]➜ Lọc cá cảnh ở các box\n[6]➜ Reload lại config\n[7]➜ Lọc các box dưới 20 thành viên\n[8]➜ Làm mới appstate\n\n[⚜️] === |QTV BOX| === [⚜️]\n[9]➜ Bật/tắt chế độ Box Only\n[10]➜ Kick người dùng facebook\n[11]➜ Làm mới data box\n[12]➜ Bật/tắt chống cướp box\n[13]➜ Bật/tắt chống out chùa\n\n[⚜️] === |MEMBER| === [⚜️]\n[14]➜ Xem thông tin box của bạn\n[15]➜ Xem thông tin bot\n[16]➜ Xem thời gian hoạt động của bot\n[17]➜ Xem thông tin Covid\n[18]➜ Xem danh sách admin-bot\n[19]➜ Lấy UID người dùng\n[20]➜ Lấy UID box và người dùng\n[21]➜ Xem thời gian hiện tại\n[22]➜ Lấy biểu đồ top tương tác\n[23]➜ Lấy link Facebook của bạn\n[24]➜ Xem danh sách box mà bot đang tham gia\n[25]➜ Ghép đôi với người khác\n[26]➜ Xem tỉ lệ may mắn của bạn\n-------------\n[⚜️]➜ Phản hồi tin nhắy theo số mà bạn chọn\n\n`
        }, threadID, (error, info) => {
            global.client.handleReply.push({
               name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "choosee",
            })
        }, event.messageID)
}
module.exports.handleReply = async function({
  args, event, Users,Threads, api, handleReply, permssion, Currencies }) {
  const { threadID, messageID, senderID } = event;
  api.unsendMessage(handleReply.messageID);
  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {
        case "16": {
           let time = process.uptime();
    let hours = Math.floor(time / (60 * 60));
    let minutes = Math.floor((time % (60 * 60)) / 60);
    let seconds = Math.floor(time % 60);
    const timeStart = Date.now();
    return api.sendMessage('⏳ Downloading, please wait...', event.threadID, (err, info) => {
      setTimeout(() => {
        api.sendMessage(`[⚜️] Ping: ${(Date.now() - timeStart)}ms \n[⚜️] Thời gian hoạt động: ${hours}:${minutes}:${seconds}`, event.threadID, event.messageID);
      }, 200);
    }, event.messageID);
}break;  
          case "13": {
 var info = await api.getThreadInfo(event.threadID);
 let data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
 else data["antiout"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`[⚜️] Đã ${(data["antiout"] == true) ? "bật" : "tắt"} thành công antiout!`, event.threadID);
}break;
case "25":{
const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];

        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});


        let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

        let gifLove = (await axios.get( `https://i.ibb.co/wC2JJBb/trai-tim-lap-lanh.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );

        let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

        var imglove = [];

              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

        var msg = {body: `🥰Ghép đôi thành công!\n💌Chúc 2 bạn trăm năm hạnh phúc\n💕Tỉ lệ hợp đôi: ${tle}%\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
}break;         
        case "26":{
const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var tile = Math.floor(Math.random() * 101); 
    var link = ["https://i.imgur.com/gWACvcO.jpg",
    "https://i.imgur.com/mpHit7i.jpg",
    "https://i.imgur.com/glHFetf.jpg",
    "https://i.imgur.com/CxwzNMv.png",
    "https://i.imgur.com/RVerKnc.jpg"
    ];
var callback = () => api.sendMessage({body:`⚜Tỉ lệ may mắn của bạn là ${tile}% ⚜`, attachment: fs.createReadStream(__dirname + "/cache/tile.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tile.jpg")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/tile.jpg")).on("close",() => callback());
}break;         
  case "9":{
if (permssion < 1) return api.sendMessage("[⚜️] Xin lỗi! lệnh này chỉ quản trị viên box mới dùng được", threadID, messageID);
const { writeFileSync } = global.nodemodule["fs-extra"];
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;  
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("[⚜️]  Tắt thành công chế độ quản trị viên tất cả mọi người đều có thể sử dụng bot ", threadID, messageID);
        } else {
            api.sendMessage("[⚜️]  Bật thành công chế độ qtvonly (chỉ admin với qtv box mới có thể sử dụng bot) ", threadID, messageID);
            adminbox[threadID] = true;
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
}break;         
        case "17": {
          const axios_1 = require("axios");
    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
    let fetchdata = await axios_1.get("https://static.pipezero.com/covid/data.json");
    var jsondata = (await fetchdata.data).total;
    var vn = (await fetchdata.data).overview[6];
    var year = vn.date + '-' + time;
    var world = jsondata.world,
      nhiemtg = world.cases,
      chettg = world.death,
      hoiphuctg = world.recovered,
      //////////////////////////////
      nhiemvn = vn.cases,
      chetvn = vn.death,
      hoiphucvn = vn.recovered,
      dieutrivn = vn.treating,
      //////////////////////////////
      nhiemvn7days = vn.avgCases7day,
      hoiphucvn7days = vn.avgRecovered7day,
      chetvn7days = vn.avgDeath7day,
      //////////////////////////////
      ptchetvn = Math.round((chetvn * 100) / nhiemvn),
      pthoiphucvn = Math.round((hoiphucvn * 100) / nhiemvn),
      ptchettg = Math.round((chettg * 100) / nhiemtg),
      pthoiphuctg = Math.round((hoiphuctg * 100) / nhiemtg),
      pthoiphucvn = pthoiphucvn.toString().split(".")[0],
      ptdieutrivn = (100 - pthoiphucvn - ptchetvn).toString().split(".")[0];
    /////////////////////////////////
    ptchetvn = ptchetvn.toString().split(".")[0];
    pthoiphuctg = pthoiphuctg.toString().split(".")[0];
    ptchettg = ptchettg.toString().split(".")[0];
    return api.sendMessage(
      "[⚜️] Thế Giới [⚜️]\n" +
      `😷 Nhiễm: ${nhiemtg}\n` +
      `💚 Hồi phục: ${hoiphuctg} (${pthoiphuctg}%)\n` +
      `💀 Tử vong: ${chettg} (${ptchettg}%)\n` +
      "[⚜️] Việt Nam [⚜️]\n" +
      `😷 Nhiễm: ${nhiemvn}\n` +
      `💉 Đang điều trị: ${dieutrivn} (${ptdieutrivn}%)\n` +
      `💚 Hồi phục: ${hoiphucvn} (${pthoiphucvn}%)\n` +
      `💀 Tử vong: ${chetvn} (${ptchetvn}%)\n` +
      `🤨 Nhiễm 7 ngày: ${nhiemvn7days}\n` +
      `❤ Hồi phục 7 ngày: ${hoiphucvn7days}\n` +
      `☠️ Tử vong 7 ngày: ${chetvn7days}\n\n` +
      `📝 Cập nhật: ${year}`,
      event.threadID, event.messageID);
}break;            
        case "1": {
          const permission = ["100031177811759"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
          const { threadID } = event;
const { setData, getData } = Threads;
var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  const lengthGroup = list.length
  for (var groupInfo of list) {
    console.log(`[⚜️] Đã cập nhật dữ liệu của box ID: ${groupInfo.threadID}`)
    var threadInfo = await api.getThreadInfo(groupInfo.threadID);
    threadInfo.threadName;
    await Threads.setData(groupInfo.threadID, { threadInfo });
  }
    console.log(`Đã cập nhật dữ liệu của ${lengthGroup} box`)
    return api.sendMessage(`[⚜️] Đã cập nhật dữ liệu của ${lengthGroup} box`, threadID)
}break;
          case "2": {
            const permission = ["100031177811759"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
           const { threadID, logMessageData } = event;
    const { setData, getData } = Users;
    var inbox = await api.getThreadList(1000, null, ['INBOX']);
    let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
    for (var groupInfo of list) {
        var { participantIDs } = await Threads.getInfo(groupInfo.threadID) || await api.getThreadInfo(groupInfo.threadID);
        for (var id of participantIDs) {
            let data = await api.getUserInfo(id);
            data.name
            let userName = data[id].name
            await Users.setData(id, { name: userName, data: {} });
            console.log(`Đã cập nhật dữ liệu của ID: ${id}`)
        }
    }
    console.log(`Update successful!`)
    return api.sendMessage(`[⚜️] Đã cập nhật dữ liệu của toàn bộ người dùng`, threadID)
}break;
        case "3": {
          const permission = ["100031177811759"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Xin cái tuổi để reset?", event.threadID, event.messageID);


  const { threadID, messageID } = event;
  return api.sendMessage(`[⚜️] Restarted successfully!!!`, threadID, () => process.exit(1));
}break;
        case "4": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100031177811759"];

  if (!permission.includes(event.senderID)) return api.sendMessage("tuổi lồn nhé em ", event.threadID, event.messageID);
api.sendMessage("[⚜️] Đang đăng xuất khỏi Facebook...",event.threadID,event.messageID)
api.logout()
}break;
          case "11": {
     const { threadID, messageID } = event;
  const threadInfo = await api.getThreadInfo(threadID);
  await Threads.setData(threadID, { name: threadInfo.name, threadInfo });
  global.data.threadInfo.set(threadID, threadInfo);
  return api.sendMessage(`[⚜️] Đã làm mới box và thành viên thành công!!!`, threadID, messageID)
}break;
          case "18": {
      const { threadID, messageID } = event;
      const { ADMINBOT } = global.config;
      const { userName } = global.data;
      const { NDH } = global.config;
var i = 1
        var msg = [];
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`${i++}. ${name}\n[⚜️] Link: fb.me/${idAdmin}`);
                }
            }
          var i = 1
        var msg1 = [];
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}. ${name1}\n[🔱] Link: fb.me/${idNDH}`);
                }
            }
return api.sendMessage(`[⚜️] ADMINBOT [⚜️]\n»============«\n\n${msg.join("\n")}\n\n————————🔱————————\n\n[⚜️] SUPPORTBOT [⚜️]\n»============«\n\n${msg1.join("\n\n")}`, event.threadID, event.messageID)
}break;
          case "5": {
            if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Chúc bạn may mắn lần sau:))`, event.threadID, event.messageID)
      let number = [];
            let uidAll = await Currencies.getAll(['userID','exp']);
            uidAll.forEach(user => {
            if(user.exp > 1) return;
                Users.delData(user.userID);
                Currencies.delData(user.userID);
                number.push(user.userID);
            })
            return api.sendMessage(`[⚜️] Đã lọc ${number.length} cá cảnh.`,threadID)
}break;
          case "7": {
            if (event.senderID != 100033478361032) return api.sendMessage(`[❗] Chúc bạn may mắn lần sau:))`, event.threadID, event.messageID)
     //let number = [];
            api.getThreadList(50, null, ["INBOX"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["OTHER"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["PENDING"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["unread"], (err, list) => getInfo({ list }))
            var getInfo = ({ list }) => {
              list.forEach(info => {
                if (info.name == "" || info.participants < 20 || info.imageSrc == null) { 
                  //number.push(info);
                  api.removeUserFromGroup(api.getCurrentUserID(),info.threadID);
                  api.deleteThread(info.threadID, (err) => {
                    Threads.delData(info.threadID)
                    if(err) return console.error(err);
                    });
                }
              })
            }
           return api.sendMessage(`[⚜️] Đã lọc những nhóm không tên hoặc dưới 20 thành viên.`,threadID)

}break;
          case "19": {
          if (Object.keys(event.mentions) == 0) return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
}break;
          case "15": {
          const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
        const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  var ping = Date.now();

  var threadInfo = await api.getThreadInfo(event.threadID);
    var time = process.uptime(),
        hours = Math.floor(time / (60 * 60)),
        minutes = Math.floor((time % (60 * 60)) / 60),
        seconds = Math.floor(time % 60);
  var severInfo = handleOS(ping);
  var msg = `\n\n[⚜️] Bot đã Hoạt Động:${hours < 10 ? (hours > 0 ? " 0" + hours + " giờ" : 
   "") : (hours > 0 ? " " + hours + " giờ" : "")} ${minutes < 10 ? (minutes > 0 ? " 0"  + minutes + " phút" : "") : (minutes > 0 ? " " + minutes + " phút" : 
 "")}${seconds < 10 ? (seconds > 0 ? " 0" + seconds + " giây." : "") : (seconds > 0 ? " " + 
 seconds + " giây." : "")}\n\n` +
  `[⚜️] Tổng Nhóm: ${global.data.allThreadID.length} nhóm.\n[⚜️] Tổng Người Dùng: ${global.data.allUserID.length} người.\n
[⚜️] Hiện đang có: ${global.config.ADMINBOT.length} Admin.\n
[⚜️] Hiện đang có: ${global.config.NDH.length} Support Bot.\n` + 
`[⚜️] Tổng Số Lệnh: ${client.commands.size }\n\n`+`[⚜️] Prefix tổng : ${global.config.PREFIX}\n[⚜️] Prefix box: ${prefix}\n${severInfo ? severInfo : `[⚜️] Ping: 
${Date.now() - ping}ms.\n\n`}`
    return api.sendMessage(msg, event.threadID)
}break;
          case "6": {
          delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("[⚜️] Đã hoàn tất reload config", event.threadID, event.messageID);    
}break;
          case "10 ":{
            if (permssion < 1) return api.sendMessage("⚡️ Có quyền đâu mà dùng (chỉ dành cho qtv box thôi)", threadID, messageID);
          var { userInfo, adminIDs } = await api.getThreadInfo(event.threadID);    
    var success = 0, fail = 0;
    var arr = [];
    for (const e of userInfo) {
        if (e.gender == undefined) {
            arr.push(e.id);
        }
    };

    adminIDs = adminIDs.map(e => e.id).some(e => e == api.getCurrentUserID());
    if (arr.length == 0) {
        return api.sendMessage("Trong nhóm bạn không tồn tại 'Người dùng Facebook'.", event.threadID);
    }
    else {
        api.sendMessage("Nhóm bạn hiện có " + arr.length + " 'Người dùng Facebook'.", event.threadID, function () {
            if (!adminIDs) {
                api.sendMessage("Nhưng bot không phải là quản trị viên nên không thể lọc được.", event.threadID);
            } else {
                api.sendMessage("Bắt đầu lọc..", event.threadID, async function() {
                    for (const e of arr) {
                        try {
                            await new Promise(resolve => setTimeout(resolve, 1000));
                            await api.removeUserFromGroup(parseInt(e), event.threadID);   
                            success++;
                        }
                        catch {
                            fail++;
                        }
                    }

                    api.sendMessage("Đã lọc thành công " + success + " người.", event.threadID, function() {
                        if (fail != 0) return api.sendMessage("Lọc thất bại " + fail + " người.", event.threadID);
                    });
                })
            }
        })
    }
}break;
          case "8": {
  const permission = ["100033478361032"];
  if (!permission.includes(event.senderID)) return api.sendMessage("[⚜️] Không cần làm mới appstate hộ admin đâu", event.threadID, event.messageID);
  let appstate = api.getAppState();
  // convert JSON object to a string
  const data = JSON.stringify(appstate);
  // write file to disk
  fs.writeFile(`${__dirname}/../../appstate.json`, data, 'utf8', (err) => {
    if (err) {
      return api.sendMessage(`Error writing file: ${err}`, event.threadID);
    } else {
      return api.sendMessage(`Đã làm mới appstate thành công`, event.threadID);
    }
  });   
}break;
          case "20": {
  let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
  const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
  return api.sendMessage(`🎭 Hi ${name}\n📝 Tên box: ${threadName}\n💎 ID BOX: ${threadInfo.threadID}\n🏵️ Uid của bạn: ${event.senderID}`, event.threadID, event.messageID);
}break;
          case "21": {
            const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
  var gio2 = moment.tz("Europe/Lodon").format("HH:mm:ss || D/MM/YYYY");
  var gio1 = moment.tz("America/Brasília").format("HH:mm:ss || D/MM/YYYY");
  var gio3 = moment.tz("Asia/Seoul").format("HH:mm:ss || D/MM/YYYY");
  var gio4 = moment.tz("Asia/Tokyo").format("HH:mm:ss || D/MM/YYYY");
  var gio5 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio6 = moment.tz("Asia/Kuala_Lumpur").format("HH:mm:ss || D/MM/YYYY");var gio1 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
  var gio7 = moment.tz("Europe/Paris").format("HH:mm:ss || D/MM/YYYY");
  let today = new Date();
return api.sendMessage(`[⚜️] Chào bạn ${name}\n[⚜️] Chúc bạn một ngày tốt lành:\n[⚜️] Hôm này là: ${thu} || ${gio}\n[⚜️] Các múi giờ khác trên thế giới:\n-🇬🇧 London: ${gio2}\n-🇺🇸 New York: ${gio5}\n-🇰🇷 Seoul: ${gio3}\n-🇯🇵Tokyo: ${gio4}\n-🇧🇷 Brasília: ${gio1}\n-🇲🇾 Kuala Lumpur: ${gio6}\n-🇫🇷 Paris:${gio7}`, event.threadID, event.messageID);
}break;
          case "12": {
           const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('[⚜️] Cần quyền quản trị viên nhóm, vui lòng thêm và thử lại!', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
    else data["guard"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`[⚜️] Đã ${(data["guard"] == true) ? "bật" : "tắt"} thành công guard!`, event.threadID, event.messageID);
}break;
          case "14": {
    const moment = require("moment-timezone");
    const request = require("request")
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
    let totalChat = JSON.parse(fs.readFileSync(totalPath));
    let threadInfo = await api.getThreadInfo(event.threadID);
    let timeByMS = Date.now();

    var memLength = threadInfo.participantIDs.length;
    let threadMem = threadInfo.participantIDs.length;
    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    };
    var nam = gendernam.length;
    var nu = gendernu.length;
    let qtv = threadInfo.adminIDs.length;
    let sl = threadInfo.messageCount;
    let u = threadInfo.nicknames;
    let icon = threadInfo.emoji;

    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    let sex = threadInfo.approvalMode;
    var pd = sex == false ? 'tắt' : sex == true ? 'bật' : 'Kh';


    if (!totalChat[event.threadID]) {
      totalChat[event.threadID] = {
        time: timeByMS,
        count: sl,
        ytd: 0
      }
      fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
    }

    let mdtt = "Chưa có thống kê";
    let preCount = totalChat[event.threadID].count || 0;
    let ytd = totalChat[event.threadID].ytd || 0;
    let hnay = (ytd != 0) ? (sl - preCount) : "Chưa có thống kê";
    let hqua = (ytd != 0) ? ytd : "Chưa có thống kê";
    if (timeByMS - totalChat[event.threadID].time > _24hours) {
      if (timeByMS - totalChat[event.threadID].time > (_24hours * 2)) {
        totalChat[event.threadID].count = sl;
        totalChat[event.threadID].time = timeByMS - _24hours;
        totalChat[event.threadID].ytd = sl - preCount;
        fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
      }
      getHour = Math.ceil((timeByMS - totalChat[event.threadID].time - _24hours) / 3600000);
      if (ytd == 0) mdtt = 100;
      else mdtt = ((((hnay) / ((hqua / 24) * getHour))) * 100).toFixed(0);
      mdtt += "%";
    }

    var callback = () =>
      api.sendMessage({
        body: `» Tên box: ${threadName}\n» ID Box: ${id}\n» Phê duyệt: ${pd}\n» Emoji: ${icon}\n» Thông tin:\n» Tổng ${threadMem} thành viên\n» 👨‍🦰Nam: ${nam} thành viên \n» 👩‍🦰Nữ: ${nu} thành viên\n» 🕵️‍♂️Với ${qtv} quản trị viên\n» 💬 Tổng: ${sl} tin nhắn\n» 📈 Mức độ tương tác: ${mdtt}\n🌟 Tổng số tin nhắn hôm qua: ${hqua}\n🌟 Tổng số tin nhắn hôm nay: ${hnay}\n   === 「${timeNow}」 ===`,
        attachment: fs.createReadStream(__dirname + '/cache/box.png')
      },
        threadID,
        () => fs.unlinkSync(__dirname + '/cache/box.png')
      );
    return request(encodeURI(`${threadInfo.imageSrc}`))
      .pipe(fs.createWriteStream(__dirname + '/cache/box.png'))
      .on('close', () => callback());
}break;    
          case "22": {
           var KMath = (data) => data.reduce((a, b) => a + b, 0);
    var inbox = await api.getThreadList(100, null, ['INBOX']);
    let xx = [...inbox].filter(group => group.isSubscribed && group.isGroup);
         var kho = [],search=[],count = [];
             for (let n of xx) {
          var threadInfo = n.name;
                     var threadye = n.messageCount;
             kho.push({"name" : threadInfo, "exp": (typeof await threadye == "undefined") ? 0 : await threadye});
     }
     kho.sort(function (a, b) { return b.exp - a.exp; });
        for(let num = 0; num < 8; num++) {
             search.push("'" + kho[num].name + "'");
         count.push(kho[num].exp);
     }
     const { createReadStream, unlinkSync, writeFileSync,statSync } = require("fs-extra");
         var axios = require('axios');
             var path = __dirname + `/cache/chart.png`;
                 var full = await KMath(count);
                 var url = `https://quickchart.io/chart?c={type:'doughnut',data:{labels:[${encodeURIComponent(search)}],datasets:[{label:'${encodeURIComponent('Tương Tác')}',data:[${encodeURIComponent(count)}]}]},options:{plugins:{doughnutlabel:{labels:[{text:'${full}',font:{size:26}},{text:'${encodeURIComponent('Tổng')}'}]}}}}`;
             const { data: stream } = await axios.get(url, {  method: 'GET',  responseType: 'arraybuffer' });
         writeFileSync(path, Buffer.from(stream, 'utf-8'));
     return api.sendMessage({ body: '[⚜️] Top các box tương tác',attachment: createReadStream(path)},event.threadID,event.messageID);
}break;
          case "23": {
           if (Object.keys(event.mentions) == 0) return api.sendMessage(`https://www.facebook.com/profile.php?id=${event.senderID}`, event.threadID, event.messageID);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: https://www.facebook.com/profile.php?id=${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
}break;
          case "24": {
            let threadInfo = await api.getThreadInfo(event.threadID);
          var inbox = await api.getThreadList(300, null, ["INBOX"]);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

var abc = "[⚜️] Danh sách bot đang tham gia [⚜️]\n\n"; let i = 0;
  for (var groupInfo of list) {
    abc += `${i+=1}. ${groupInfo.name}\n[⚜️] ID BOX: ${threadInfo.threadID}\n---------------------\n`;
  }
  api.sendMessage(abc, event.threadID);
}break;
  }
   }
 }
}

module.exports.handleEvent = async ({ api, event }) => {
  if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
  let totalChat = JSON.parse(fs.readFileSync(totalPath));
  if (!totalChat[event.threadID]) return;
  if (Date.now() - totalChat[event.threadID].time > (_24hours * 2)) {
    let sl = (await api.getThreadInfo(event.threadID)).messageCount;
    totalChat[event.threadID] = {
      time: Date.now() - _24hours,
      count: sl,
      ytd: sl - totalChat[event.threadID].count
    }
    fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
  }
}
