module.exports.config = {
  name: "autobanuser",
  version: "1.0.0",
  hasPermssion: 0, 
  credits: "NTKhang",
  description: "tự động ban người dùng nếu spam bot 6 lần/1 phút",
  commandCategory: "Hệ thống ban",
  usages: "x",
  cooldowns: 5
};

module.exports. run = ({api, event}) => {
  return api.sendMessage("tự động ban người dùng nếu spam bot 6lần/1phút", event.threadID, event.messageID);
};
module.exports.handleEvent = async ({ Users, api, event}) => {
  const moment = require("moment-timezone");
  let { senderID, messageID, threadID } = event;
  const so_lan_spam = 6;
  const thoi_gian_spam = 600000;
  const unbanAfter = 720000;
  if (!global.client.autoban) global.client.autoban = {};
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  if (!event.body || event.body.indexOf(prefix) != 0) return;
  let dataUser = await Users.getData(senderID) || {};
  let data = dataUser.data || {};
  if ((global.client.autoban[senderID].timeStart + thoi_gian_spam) <= Date.now()) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >= so_lan_spam) {
      const time = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
      if (data && data.banned == true) return;
      data.banned = true;
      data.reason = `spam bot ${so_lan_spam} lần/${thoi_gian_spam/600000}giờ`;
      data.autoban = {
        timeStart: Date.now(),
        unbanAfter
      };
      data.dateAdded = time;
      await Users.setData(senderID, { data });
      global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
      api.sendMessage({
        body: senderID + " | " + dataUser.name + `\nBạn đã bị ban không thể sử dụng hoàng thượng ${unbanAfter/600000} phút với lý do: spam hoàng thượng 6 lần/1 phút\nHãy đợi sau ${Math.floor(unbanAfter/600000)} phút bạn có thể sử dụng lại bot`,}, threadID, () => {
          setTimeout(async function() {
            delete data.autoban;
            data.banned = false;
            data.reason = null;
            data.dateAdded = null;
            await Users.setData(senderID, { data });
            global.data.userBanned.delete(senderID);
          }, unbanAfter);
        });
      for (let idAdmin of global.config.ADMINBOT) {
        api.sendMessage("Kích hoạt chế độ autoban người dùng " + senderID + " | " + dataUser.name + ` vì spam hoàng thượng ${so_lan_spam} lần/1 phút\nHãy đợi sau ${Math.floor(unbanAfter/600000)} phút bạn có thể sử dụng lại bot\nThời gian: ` + time, idAdmin);
      };
    }
  }
};
