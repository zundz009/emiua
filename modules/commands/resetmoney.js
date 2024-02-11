module.exports.config = {
    name: "resetmoney",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "manhIT",
    description: "Reset số tiền của cả nhóm về 0",
    commandCategory: "Hệ Thống",
    usages: "[cc], [del], [all]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args }) {
  const permission = ["100024005894493",""];
  if (!permission.includes(event.senderID)) return api.sendMessage("reset cái con cặc :)", event.threadID, event.messageID);
module.exports.run = async ({ api, event, Currencies }) => {
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
                money -= money;
                await Currencies.setData(user.id, { money });
            }
        }
    }
    return api.sendMessage("Số money của thành viên nhóm đã được reset về mức 0 !", event.threadID);
 }
}