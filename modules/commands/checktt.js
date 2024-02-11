module.exports.config = {
    name: "checktt", 
    version: "1.0.1", 
    hasPermssion: 0, 
    credits: "DungUwU && Nghĩa", 
    description: "Check tương tác ngày/tuần/toàn bộ", 
    commandCategory: "Tiện ích", 
    usages: "[all/week/day]",  
    cooldowns: 5, 
    dependencies: {
        "fs": " ",
        "moment-timezone": " "
    }
};

let path = __dirname + '/checktt/';
let moment = require('moment-timezone');
module.exports.onLoad = () => {
    let fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
  setInterval(() => {
   let today = moment.tz("Asia/Ho_Chi_Minh").day();
   let checkttData = fs.readdirSync(path);
    checkttData.forEach(file => {
      let fileData = JSON.parse(fs.readFileSync(path + file));
      if (fileData.time != today) {
        setTimeout(() => {
          fileData = JSON.parse(fs.readFileSync(path + file));
          if (fileData.time != today) {
            fileData.time = today;
            fs.writeFileSync(path + file, JSON.stringify(fileData, null, 4));
          }
        }, 60 * 1000);
      }
    })
  }, 60 * 1000);
}

module.exports.handleEvent = async function ({ api, event, Threads }) {
    if (global.client.sending_top == true) return;
   let fs = global.nodemodule['fs'];
    const { threadID, senderID, messageID } = event;
    let today = moment.tz("Asia/Ho_Chi_Minh").day();

    if (event.isGroup == true && !fs.existsSync(path + threadID + '.json')) {
        let newObj = {
            total: [],
            week: [],
            day: [],
            time: today
        };
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
        let threadInfo = await Threads.getInfo(threadID) || {};
        if (threadInfo.hasOwnProperty('isGroup') && threadInfo.isGroup) {
            let UserIDs = threadInfo.participantIDs;
            for (user of UserIDs) {
                if (!newObj.total.find(item => item.id == user)) {
                    newObj.total.push({
                        id: user,
                        count: 0
                    });
                }
                if (!newObj.week.find(item => item.id == user)) {
                    newObj.week.push({
                        id: user,
                        count: 0
                    });
                }
                if (!newObj.day.find(item => item.id == user)) {
                    newObj.day.push({
                        id: user,
                        count: 0
                    });
                }
            }
        }
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
    }
    let threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    if (threadData.time != today) {
      global.client.sending_top = true;
      setTimeout(() => global.client.sending_top = false, 5 * 60 * 1000);
    }
    let userData_week_index = threadData.week.findIndex(e => e.id == senderID);
    let userData_day_index = threadData.day.findIndex(e => e.id == senderID);
    let userData_total_index = threadData.total.findIndex(e => e.id == senderID);
    if (userData_total_index == -1) {
        threadData.total.push({
            id: senderID,
            count: 1,
        });
    } else threadData.total[userData_total_index].count++;
    if (userData_week_index == -1) {
        threadData.week.push({
            id: senderID,
            count: 1
        });
    } else threadData.week[userData_week_index].count++;
    if (userData_day_index == -1) {
        threadData.day.push({
            id: senderID,
            count: 1
        });
    } else threadData.day[userData_day_index].count++;
    // if (threadData.time != today) {
    //     threadData.day.forEach(e => {
    //         e.count = 0;
    //     });
    //     if (today == 1) {
    //         threadData.week.forEach(e => {
    //             e.count = 0;
    //         });
    //     }
    //     threadData.time = today;
    // }

    fs.writeFileSync(path + threadID + '.json', JSON.stringify(threadData, null, 4));
}
async function duong(userTotal) {
   if(userTotal < 50) {
          var text = "ĐỒNG"
        } 
        else if (userTotal < 150) {
          var text = "Bạc"
        }
          else if (userTotal < 250) {
          var text = "Vàng"
        }
        else if (userTotal < 400) {
          var text = "Bạch Kim"
        }
        else if (userTotal < 700) {
          var text = "Kim Cương"
        }
        else if (userTotal < 1400) {
          var text = "Tinh Anh"
        }
        else if (userTotal < 3900) {
          var text = "Cao Thủ"
        }
        else if (userTotal < 7000) {
          var text = "Chiến Tướng "
        }
         else if (userTotal < 80000) {
          var text = "Thách Đấu" 
            }
  return text;
}
async function duongImg(userTotal) {
  if (userTotal < 50) {
          var img = "https://i.imgur.com/JLUvviT.jpg"
        } 
        else if (userTotal < 150) {
          var img = "https://i.imgur.com/QGAIdrb.jpg"
    }     else if (userTotal < 250) {
          var img = "https://i.imgur.com/8CVR7XA.jpg"
        }    else if (userTotal < 400) {
          var img = "https://i.imgur.com/HIZtUip.jpg"
        }    else if (userTotal < 700) {
          var img = "https://i.imgur.com/4JgzTBK.jpg"
        }    else if (userTotal < 1400) {
          var img = "https://i.imgur.com/6mhKvhg.jpg"
        }    else if (userTotal < 3900) {
          var img = "https://i.imgur.com/uNXQbVt.jpg"
        }    else if (userTotal < 7000) {
          var img = "https://i.imgur.com/n9mEFQn.jpg"
        }
         else if (userTotal < 80000) {
          var img = "https://i.imgur.com/n9fCkUi.jpg"
         }
  return img
}
module.exports.run = async function ({ api, event, args, Users, Threads, Currencies }) {
  try {

    await new Promise(resolve => setTimeout(resolve, 500));
    let fs = global.nodemodule['fs'];
    const { threadID, messageID, senderID, mentions } = event;
    if (!fs.existsSync(path + threadID + '.json')) {
        return api.sendMessage("Chưa có dữ liệu", threadID);
    }
   let threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    let query = args[0] ? args[0].toLowerCase() : '';

if (query == 'locmem') {
    let threadInfo = await api.getThreadInfo(threadID);
    if (!threadInfo.adminIDs.some(e => e.id == senderID)) return api.sendMessage("Bạn không có quyền hạn sử dụng chức năng này", threadID, messageID);
    if (!threadInfo.isGroup) return api.sendMessage("Chỉ có thể sử dụng chức năng trong nhóm", threadID, messageID);
   if (!threadInfo.adminIDs.some(e => e.id == api.getCurrentUserID())) return api.sendMessage("Cần quyền Quản trị viên cho Bot để thực hiện lệnh", threadID);
    let minCount = args[1];

          if (!minCount) return api.sendMessage("Bạn chưa nhập số tin nhắn", threadID, messageID);
      allUser = threadInfo.participantIDs;
          api.sendMessage(`Đang tiến hành lọc...`, threadID, messageID)
    for (let user of allUser) {
      if (user == api.getCurrentUserID()) continue;
      if (!threadData.total.some(e => e.id == user) || threadData.total.find(e => e.id == user).count < minCount) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        api.removeUserFromGroup(user, threadID);
        for (let e in threadData) {
          if (e == 'time') continue;
          if (threadData[e].some(e => e.id == user)) {
            threadData[e].splice(threadData[e].findIndex(e => e.id == user), 1);
          }
        }
      }
    }
    fs.writeFileSync(path + threadID + '.json', JSON.stringify(threadData, null, 4));
    if (allUser.length == 0 ) return api.sendMessage('Nhóm bạn không có cá cảnh', threadID, messageID);
    return api.sendMessage(`Đã xóa ${allUser.length - threadData.total.filter(e => e.count >= minCount).length} thành viên dưới ${minCount} tin nhắn`, threadID, messageID);
          }
var header = '',
        body = '',
        footer = '',
        msg = '',
        count = 1,
        storage = [],
        data = 0;
    if (query == 'all' || query == '-a') {
        header = '𝗧𝗢̂̉𝗡𝗚 𝗦𝗢̂́ 𝗧𝗨̛𝗢̛𝗡𝗚 𝗧𝗔́𝗖 𝗧𝗥𝗢𝗡𝗚 𝗡𝗛𝗢́𝗠\n━━━━━━━━━━━━━━━━━━';
        data = threadData.total;
    } else if (query == 'week' || query == '-w') {
        header = '𝗧𝗢̂̉𝗡𝗚 𝗦𝗢̂́ 𝗧𝗨̛𝗢̛𝗡𝗚 𝗧𝗔́𝗖 𝗧𝗥𝗢𝗡𝗚 𝗧𝗨𝗔̂̀𝗡\n━━━━━━━━━━━━━━━━━━';
        data = threadData.week;
    } else if (query == 'day' || query == '-d') {
        header = '𝗧𝗢̂̉𝗡𝗚 𝗦𝗢̂́ 𝗧𝗨̛𝗢̛𝗡𝗚 𝗧𝗔́𝗖 𝗧𝗥𝗢𝗡𝗚 𝗡𝗚𝗔̀𝗬\n━━━━━━━━━━━━━━━━━━';
        data = threadData.day;
    } else {
        data = threadData.total;
    }
    for (let item of data) {
        let userName = await Users.getNameUser(item.id) || 'Facebook User';
        let itemToPush = item;
        itemToPush.name = userName;
        storage.push(itemToPush);
    };
    let check = ['all', '-a', 'week', '-w', 'day', '-d'].some(e => e == query);
    if (!check && Object.keys(mentions).length > 0) {
        storage = storage.filter(e => mentions.hasOwnProperty(e.id));
    }
    //sort by count from high to low if equal sort by name
    storage.sort((a, b) => {
        if (a.count > b.count) {
            return -1;
        }
        else if (a.count < b.count) {
            return 1;
        } else {
            return a.name.localeCompare(b.name);
        }
    });
    if ((!check && Object.keys(mentions).length == 0) || (!check && Object.keys(mentions).length == 1) || (!check && event.type == 'message_reply')) {
       let UID = event.messageReply ? event.messageReply.senderID : Object.keys(mentions)[0] ? Object.keys(mentions)[0] : senderID;
      var money = (await Currencies.getData(UID)).money;
       let userRank = storage.findIndex(e => e.id == UID);
        let userTotal = threadData.total.find(e => e.id == UID) ? threadData.total.find(e => e.id == UID).count : 0;
        let userTotalWeek = threadData.week.find(e => e.id == UID) ? threadData.week.find(e => e.id == UID).count : 0;
         let userRankWeek = threadData.week.sort((a, b) => b.count - a.count).findIndex(e => e.id == UID);
       let userTotalDay = threadData.day.find(e => e.id == UID) ? threadData.day.find(e => e.id == UID).count : 0;
         let userRankDay = threadData.day.sort((a, b) => b.count - a.count).findIndex(e => e.id == UID);
       let nameUID = storage[userRank].name || 'Facebook User';
       let target = UID == senderID ? 'Bạn' : nameUID;

        if (userRank == -1) {
            return api.sendMessage(`${target} chưa có dữ liệu`, threadID);                           }
let img = await duongImg(userTotal)
      await global.utils.downloadFile(img, __dirname + "/cache/AnhRank.png")
let text = await duong(userTotal)
        body += `
        → Nhân Vật: ${nameUID}
        → Khả Năng Cung Đấu: ${userTotalDay} 
        ✑Bổng Lộc ${money}
        → Tranh Sủng: ${userTotal} (Hạng ${userRank + 1})
        → Sủng Ái: ${text} 
        `.replace(/^ +/gm, '');
    } 
    if (args[0] == "day" || args[0] == "all" || args[0] == "week") {
        bodyy = storage.map(item => {
            return `${count++}. ${item.name} (${item.count}) `;
        }).join('\n');
      var KMath = (data) => data.reduce((a, b) => a + b, 0);
        footer = `━━━━━━━━━━━━━━━━━━\n→ Tổng Tin Nhắn: ${storage.reduce((a, b) => a + b.count, 0)}`;


    msg = `${header}\n${bodyy}\n${footer}`;
        return api.sendMessage( `${msg}`, threadID, messageID)
    }
    if (args[0] == "help") {
      await global.utils.downloadFile("https://i.imgur.com/hrIGmUX.jpg", __dirname + "/cache/check-banner.jpg")
      return api.sendMessage({body:`𝗛𝗨̛𝗢̛́𝗡𝗚 𝗗𝗔̂̃𝗡 𝗦𝗨̛̉ 𝗗𝗨̣𝗡𝗚 \n━━━━━━━━━━━━━━━━━━\n→ ${global.config.PREFIX}${this.config.name} <trống/reply/tag>: Check số tin nhắn\n→ ${global.config.PREFIX}${this.config.name} <all/week/day>: Check số tin nhắn toàn bộ người dùng trong nhóm (tuần/ngày)\n→ ${global.config.PREFIX}${this.config.name} locmem <số tin nhắn>: Xoá thành viên có số tin nhắn dưới <số tin nhắn>`,attachment: fs.createReadStream(__dirname + "/cache/check-banner.jpg")}, threadID, messageID)
    }
      api.sendMessage({body:`${body}`,attachment: fs.createReadStream(__dirname + "/cache/AnhRank.png")}, threadID, messageID)
    threadData = storage = null;
    return;
  } catch(e) {
    console.log(e)
    api.sendMessage(e, threadID, messageID)
  }
}