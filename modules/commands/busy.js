module.exports.config = {
  name: "busy",
  version: "1.0.0",
  permissions: 1,
  credits: "Henry",
  description: "Bật hoặc tắt chế độ busy",
  usages: "[lí do]",
  commandCategory: "Tiện ích",
  cooldowns: 5
};

const busyPath = __dirname + '/cache/busy.json';
const fs = require('fs');

module.exports.onLoad = () => {
  if (!fs.existsSync(busyPath)) fs.writeFileSync(busyPath, JSON.stringify({}));
}

module.exports.handleEvent = async function({ api, event, Users }) {
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    var { senderID, threadID, messageID, mentions } = event;
    if (senderID in busyData) {
        var info = busyData[senderID];
        delete busyData[senderID];
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        return api.sendMessage(`🎀─── [𝐁𝐀́𝐎 • 𝐂𝐀́𝐎] ───🎀\n\n[𝐁𝐎𝐓 𝐂𝐔𝐓𝐄] - 𝐂𝐡𝐚̀𝐨 𝐦𝐮̛̀𝐧𝐠 Chủ Cung 𝐪𝐮𝐚𝐲 𝐭𝐫𝐨̛̉ 𝐥𝐚̣𝐢 🥰\n\n🎀───── •🌸• ─────🎀`, threadID, () => {
            if (info.tag.length == 0) api.sendMessage("[𝐁𝐎𝐓 𝐂𝐔𝐓𝐄] - 𝐓𝐫𝐨𝐧𝐠 𝐥𝐮́𝐜 Chủ Cung 𝐯𝐚̆́𝐧𝐠 𝐦𝐚̣̆𝐭, 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐚𝐢 𝐧𝐡𝐚̆́𝐜 Chủ Cung 𝐡𝐞̂́𝐭 ❤️", threadID);
            else {
                var msg = "";
                for (var i of info.tag) {
                    msg += `${i}\n`
                }
                api.sendMessage("[𝐁𝐎𝐓 𝐂𝐔𝐓𝐄] - 𝐃𝐮̛𝐨̛́𝐢 𝐥𝐚̀ 𝐥𝐢𝐬𝐭 𝐧𝐡𝐮̛̃𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐚𝐠 𝐭𝐞̂𝐧 Chủ Cung 𝐧𝐞̀ 👉:\n\n" + msg, threadID)
            }
        }, messageID);
    }

    if (!mentions || Object.keys(mentions).length == 0) return;

    for (const [ID, name] of Object.entries(mentions)) {
        if (ID in busyData) {
            var infoBusy = busyData[ID], mentioner = await Users.getNameUser(senderID), replaceName = event.body.replace(`${name}`, "");
            infoBusy.tag.push(`${mentioner}: ${replaceName == "" ? "𝐕𝐮̛̀𝐚 𝐭𝐚𝐠 𝐭𝐞̂𝐧 Chủ Cung 𝟏 𝐥𝐚̂̀𝐧" : replaceName}`)
            busyData[ID] = infoBusy;
            fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
            return api.sendMessage(`🎀───[𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎]───🎀\n\n${name.replace("@", "")} 𝐡𝐢𝐞̣̂𝐧 𝐫𝐚̂́𝐭 𝐛𝐚̣̂𝐧${infoBusy.lido ? ` 𝐯𝐨̛́𝐢 𝐥𝐲́ 𝐝𝐨: ${infoBusy.lido}.\n\n🎀───── •🌸• ─────🎀` : "."}`, threadID, messageID);
        }
    }
}

module.exports.run = async function({ api, event, args, Users }) {
  await new Promise(resolve => setTimeout(resolve, 1000));
    let busyData = JSON.parse(fs.readFileSync(busyPath));
  const axios = require("axios")
  const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    const { threadID, senderID, messageID, body } = event;
  const res = await axios.get("https://APIURL.miraiofficials123.repl.co");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download = (await axios.get(data, {
      responseType: "stream"
    })).data;
    var content = args.join(" ") || "";
    if (!(senderID in busyData)) {
        busyData[senderID] = {
            lido: content,
            tag: []
        }
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
       var msg = (content.length == 0) ? `🌺──── [𝐁𝐎𝐓 𝐂𝐔𝐓𝐄] ────🌺\n\n》Chủ Cung 𝐯𝐮̛̀𝐚 𝐛𝐚̣̂𝐭 𝐦𝐨𝐝𝐞 𝐛𝐚̣̂𝐧\n》𝐋𝐢́ 𝐝𝐨: 𝐊𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐥𝐢́ 𝐝𝐨 \n\n🌺───「${timeNow}」───🌺` : `🌺──── •Busy• ────🌺\n\n》Chủ Cung 𝐯𝐮̛̀𝐚 𝐛𝐚̣̂𝐭 𝐦𝐨𝐝𝐞 𝐛𝐚̣̂𝐧\n》𝐕𝐨̛́𝐢 𝐥𝐢́ 𝐝𝐨: ${content}\n\n🌺───「${timeNow}」───🌺`;
        return api.sendMessage({body: msg, attachment: download}, threadID, messageID);
    }
}
