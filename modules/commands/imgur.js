module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "cc",
    description: "",
    commandCategory: "Game",
    usages: "[reply]",
    cooldowns: 5,
    dependencies: {
      "axios": ""
    }
};

module.exports.run = async ({ api, event }) => {
  let axios = require("axios");  
  let linkanh = event.messageReply.attachments[0].url || args.join(" ");
  if(!linkanh) return api.sendMessage('Vui lòng reply hoặc nhập link 1 hình ảnh!!!', event.threadID, event.messageID)
  let res = await axios.get(`https://API-Web.miraiofficials123.repl.co/imgur?link=${encodeURIComponent(linkanh)}&apikey=18102004`);    
  let img = res.data.data;
  return api.sendMessage(`${img}`, event.threadID, event.messageID)
}
/*module.exports.run = async ({ api, event }) => {
  var request = require('request');
  var linkanh = event.messageReply.attachments[0].url || args.join(" ");
  var link = encodeURIComponent(linkanh);
  var options = {
        'method': 'POST',
        'url': 'https://api.imgur.com/3/image',
        'headers': {
            'Authorization': 'Client-ID fc9369e9aea767c'
        },
        formData: {
            'image': link
        }
    };

}*/