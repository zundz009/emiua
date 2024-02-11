module.exports = {
  config: {
    name: "daiphi",
    credits: "Mr.Ben",
    hasPermssion: 0,
    usages: "bỏ trống hoặc nhập nội dung muốn ping, có thể reply ảnh, video",
    commandCategory: "Tiện ích", 
    cooldowns: 0
  },
  run: async function({ api, event, args, Users }) {
    try {
      const
        ID = event.participantIDs || (await api.getThreadInfo(event.threadID)).participantIDs,
        axios = require("axios"),
        fs = require("fs-extra")
    if (event.type == 'message_reply') {
      if (!event.messageReply.attachments[0]) return api.sendMessage("vui lòng chỉ reply ảnh, video", event.threadID, event.messageID)
      var
        mentions = []
      for (var user of ID) {
        var body = (args.length == 0) ? "====『 𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 』====📣\n━━━━━━━━━━━━━━━━\n Tới giờ Thỉnh An Đại Phi 🧡🧡" : args.join(" ")
        mentions.push({
          tag: body,
          id: user
        })
      }
      var i = 1, ben = []
      for (var cc in event.messageReply.attachments) {
        if (event.messageReply.attachments[cc].type == "photo" || event.messageReply.attachments[cc].type == "sticker") type = ".jpg";
      if (event.messageReply.attachments[cc].type == "video") type = ".mp4";
      if (event.messageReply.attachments[cc].type == "audio") type = ".mp3";
      var
        path = __dirname + "/cache/ping" + (i++) + type,
        img = (await axios.get(event.messageReply.attachments[cc].url, {responseType:"arraybuffer"})).data
      fs.writeFileSync(path, Buffer.from(img,"utf-8"))
        ben.push(fs.createReadStream(path))
      }
      return api.sendMessage({
        body: `📣 ${body}\n👤 được Ping bởi: ${await Users.getNameUser(event.senderID)}`, 
        attachment: ben,
        mentions}, event.threadID, () => fs.unlinkSync(path))
    }
      else {
        var
          mentions = []
        for (var user of ID) {
        var
         body = (args.length == 0) ? "====『 𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 』====📣\n━━━━━━━━━━━━━━━━\n Tới Giờ Thỉnh An Đại Phi 🧡🧡" : args.join(" ")
        mentions.push({
          tag: body,
          id: user
        })
        }
      return api.sendMessage({
        body: `📣 ${body}\n👤 được Ping bởi: ${await Users.getNameUser(event.senderID)}`,
        mentions}, event.threadID)
      }
    } catch (e) {
      console.log(e)
    }
  }
}