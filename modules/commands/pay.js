module.exports.config = {
  name: "pay",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Chuyển tiền của bản thân cho ai đó",
  commandCategory: "Group",
  usages: "pay @tag coins",
  cooldowns: 5,
   };

module.exports.run = async ({ event, api, Currencies, args }) => {
let { threadID, messageID, senderID } = event;
const mention = Object.keys(event.mentions)[0];
let name = event.mentions[mention].split(" ").length
if(!mention) return api.sendMessage('[𝐙𝐮𝐧] 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐓𝐚𝐠 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐌𝐮𝐨̂́𝐧 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐍𝐠𝐚̂𝐧 𝐋𝐮̛𝐨̛̣𝐧𝐠 💸!',threadID,messageID);
else {
if(!isNaN(args[0+ name])) {
  const coins = parseInt(args[0+ name]);
  let balance = (await Currencies.getData(senderID)).money;
      if (coins <= 0) return api.sendMessage('[𝐙𝐮𝐧] 𝐒𝐨̂́ 𝐍𝐠𝐚̂𝐧 𝐋𝐮̛𝐨̛̣𝐧𝐠 𝐁𝐚̣𝐧 𝐌𝐨̂́𝐧 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐊𝐡𝐨̂𝐧𝐠 𝐇𝐨̛̣𝐩 𝐋𝐞̣̂',threadID,messageID);
  if (coins > balance) return api.sendMessage('[𝐙𝐮𝐧] 𝐒𝐨̂́ 𝐍𝐠𝐚̂𝐧 𝐋𝐮̛𝐨̛̣𝐧𝐠 𝐁𝐚̣𝐧 𝐌𝐮𝐨̂́𝐧 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐋𝐨̛́𝐧 𝐇𝐨̛𝐧 𝐒𝐨̂́ 𝐍𝐠𝐚̂𝐧 𝐋𝐮̛𝐨̛̣𝐧𝐠 𝐁𝐚̣𝐧 𝐇𝐢𝐞̣̂𝐧 𝐂𝐨́!',threadID,messageID);
  else {
      return api.sendMessage({ body: '[𝐙𝐮𝐧] Đ𝐚̃ 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 Cho' + event.mentions[mention].replace(/@/g, "") + ` ${args[0+ name]} 𝐍𝐠𝐚̂𝐧 𝐋𝐮̛𝐨̛̣𝐧𝐠💸`}, threadID, async () => {
          await Currencies.increaseMoney(mention, parseInt(coins));
                Currencies.decreaseMoney(senderID, parseInt(coins));
          }, messageID);
  }
} else return api.sendMessage('[𝐙𝐮𝐧] 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐍𝐡𝐚̣̂𝐩 𝐒𝐨̂𝐚 𝐍𝐠𝐚̂𝐧 𝐋𝐮̛𝐨̛̣𝐧𝐠 𝐌𝐮𝐨̂́𝐧 𝐂𝐡𝐮𝐲𝐞̂̉𝐧 💸',threadID,messageID);
}
}
