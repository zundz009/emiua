module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
 if (type == "tự rời") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐞̂𝐦 𝐥𝐚̣𝐢 𝐜𝐨𝐧 𝐚̂𝐦 𝐛𝐢𝐧𝐡 𝐧𝐚̀𝐲 ${name} 𝐯𝐚̀𝐨 𝐧𝐡𝐨́𝐦 :( `, event.threadID)
   } else api.sendMessage(`𝐂𝐨𝐧 𝐀̂𝐦 𝐁𝐢𝐧𝐡 ${name} 𝐓𝐫𝐨𝐧𝐠 𝐋𝐮́𝐜 𝐊𝐡𝐨̂𝐧𝐠 𝐀𝐢 Đ𝐞̂̉ 𝐘́ 𝐍𝐨́ Đ𝐚̃ 𝐓𝐮̛̣ 𝐘́ 𝐑𝐨̛̀𝐢 𝐊𝐡𝐨̉𝐢 𝐂𝐮𝐧𝐠 Đ𝐢𝐞̣̂𝐧 !\n 𝐍𝐡𝐮̛𝐧𝐠 𝐑𝐨̛̀𝐢 𝐓𝐡𝐞̂́ 𝐍𝐚̀𝐨 Đ𝐮̛𝐨̛̣𝐜, 𝐍𝐠𝐨̂̀𝐢 𝐘𝐞̂𝐧 𝐂𝐡𝐨 𝐓𝐚𝐨`, event.threadID);
  })
 }
}