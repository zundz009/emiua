module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "manhG",
  description: "chỉ là rời nhóm theo ID thôi",
  commandCategory: "Hệ thống admin-bot",
  usages: "[ID nhóm] [Nội dung]",
  cooldowns: 5,
  dependencies: "",

};

module.exports.run = async function ({ api, Users, Threads, event, args }) {
  const permission = ["100031177811759", "100011125839072", "" ,"", "", ""];
  if (!permission.includes(event.senderID)) return api.sendMessage("[𝐁𝐎𝐓🎀] »𝐐𝐮𝐲𝐞̂̀𝐧 𝐥𝐮̛̣𝐜 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̉ 𝐦𝐚̣𝐧𝐡 đ𝐞̂̉ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐥𝐞̣̂𝐧𝐡 𝐧𝐚̀𝐲!!!", event.threadID, event.messageID);
  var idbox = args[0];
  var reason = args.slice(1);
  if (!args[0]) return api.sendMessage(`${api.getCurrentUserID()}`, () =>
    api.sendMessage(`[𝐁𝐎𝐓🎀] »★★ 𝗧𝗮̣𝗺 𝗕𝗶𝗲̣̂𝘁 𝗡𝗵𝗲́ ★★\n\n𝗼𝘂𝘁 𝗯𝗼𝘅 𝗱𝗮̂𝘆😢 `, event.threadID, () =>
      api.removeUserFromGroup(`${api.getCurrentUserID()}`, event.threadID)));
        api.sendMessage("[𝐁𝐎𝐓🎀] »𝗗𝗮̃ 𝗻𝗵𝗮̣̂𝗻 𝗹𝗲̣̂𝗻𝗵 𝗼𝘂𝘁 𝗻𝗵𝗼́𝗺 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻, 𝗹𝘆́ 𝗱𝗼: " + reason.join(" "), idbox, () =>
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idbox, () =>
            api.sendMessage("[𝐁𝐎𝐓 🎀] »𝗗𝗮̃ 𝗼𝘂𝘁 𝗯𝗼𝘅 𝗰𝗼́ 𝗶𝗱: " + idbox + " với lý do: " + reason.join(" "), event.threadID)))
}