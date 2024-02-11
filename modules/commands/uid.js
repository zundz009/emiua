module.exports.config = {
    name: "uid",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NLam182",
    description: "Kiểm tra uid acc fb",
    commandCategory: "Công cụ",
    usages: "Dùng uid/ uid + reply/ uid + mention/ uid +link",
    cooldowns: 5
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID } = event;
    let uid;

    if (!args[0]) {
        uid = event.senderID;
    } else {
        if (args[0].startsWith('https://')) {
            const link = args[0];
            try {
                const response = await axios.get(`https://api.zeidbot.site/timuid?link=${encodeURIComponent(link)}`);
                uid = response.data.id;
            } catch (error) {
                return api.sendMessage('Không thể lấy được UID từ liên kết.', threadID, messageID);
            }
        } else {
            uid = args[0];
        }
    }

    if (event.type === "message_reply") {
        uid = event.messageReply.senderID;
    }

    if (args.join().indexOf("@") !== -1) {
        uid = Object.keys(event.mentions)[0];
    }

    api.sendMessage(`${uid}`, threadID, messageID);
};
