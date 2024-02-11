module.exports.config = {
  name: "setprefix",
  version: "1.0.1",
  hasPermssion: 1,
  credits: "Mirai Team",//* Dành tặng cho Dương Linh Uyên lỏ *\\
  description: "Đặt lại prefix của nhóm",
  commandCategory: "Tiện ích",
  usages: "[prefix/reset]",
  cooldowns: 5
};

module.exports.handleReaction = async function({ api, event, multiple, Threads, handleReaction }) {
  if (event.userID != handleReaction.author) return;
  api.unsendMessage(handleReaction.messageID);
  const { threadID } = event;
  var data = (await Threads.getData(String(threadID))).data || {};
  data["PREFIX"] = handleReaction.PREFIX;
  await Threads.setData(threadID, { data });
  await global.data.threadData.set(String(threadID), data);
  return api.sendMessage(`[𝐁𝐎𝐓🎀] »Đ𝐚̃ 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 đ𝐨̂̉𝐢 𝐩𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡: ${handleReaction.PREFIX}`, threadID);
}

module.exports.run = async ({ api, event, args, client, Threads }) => {
  if (typeof args[0] == "undefined") return api.sendMessage("𝐊𝐡𝐨̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 đ𝐞̂̉ 𝐭𝐫𝐨̂́𝐧𝐠 𝐩𝐫𝐞𝐟𝐢𝐱", event.threadID, event.messageID);
  let prefix = args[0].trim();
  if (!prefix) return api.sendMessage("𝐊𝐡𝐨̂𝐧𝐠 đ𝐮̛𝐨̛̣𝐜 đ𝐞̂̉ 𝐭𝐫𝐨̂́𝐧𝐠 𝐩𝐫𝐞𝐟𝐢𝐱", event.threadID, event.messageID);
  if (prefix == "reset") {
    var data = (await Threads.getData(event.threadID)).data || {};
    data["PREFIX"] = global.config.PREFIX;
      await Threads.setData(event.threadID, { data });
    await global.data.threadData.set(String(event.threadID), data);
    return api.sendMessage(`[𝐁𝐎𝐓 🎀] »Đ𝐚̃ 𝐫𝐞𝐬𝐞𝐭 𝐩𝐫𝐞𝐟𝐢𝐱 𝐯𝐞̂̀ 𝐦𝐚̣̆𝐜 đ𝐢̣𝐧𝐡 ${global.config.PREFIX}`, event.threadID, event.messageID);
  } else return api.sendMessage("[𝐁𝐎𝐓🎀] »𝐁𝐚̣𝐧 𝐜𝐨́ 𝐜𝐡𝐚̆́𝐜 𝐦𝐮𝐨̂́𝐧 đ𝐨̂̉𝐢 𝐩𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡: " + prefix + "\n\n𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 đ𝐞̂̉ 𝐱𝐚́𝐜 𝐧𝐡𝐚̣̂𝐧.", event.threadID, (error, info) => {
      global.client.handleReaction.push({
      name: "setprefix",
      messageID: info.messageID,
      author: event.senderID,
      PREFIX: prefix
    })
  })
}