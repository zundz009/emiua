module.exports.config = {
  name: "longan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Chọn ngẫu nhiên số ",
  commandCategory: "Box chat",
  cooldowns: 0
};
module.exports.run = function (fun) {
const number = Math.floor(Math.random() * 7);
fun.api.sendMessage(number+'', fun.event.threadID);
}