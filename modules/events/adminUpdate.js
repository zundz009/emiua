module.exports.config = {
	name: "adminUpdate",
	eventType: ["log:thread-admins","log:thread-name", "log:user-nickname","log:thread-icon","log:thread-color"],
	version: "1.5.5",
	credits: "Nam",
	description: "Cập nhật thông tin nhóm một cách nhanh chóng",
    envConfig: {
        autoUnsend: true,
        sendNoti: true,
        timeToUnsend: 10
    }
};

module.exports.run = async function ({ event, api, Threads,Users }) {
	const fs = require("fs");
  var dir = __dirname + "/adminUpdate";
	var iconPath = __dirname + "/adminUpdate/emoji.json";
  var namePath = __dirname + "/adminUpdate/namebox.json";
  var bietdanhPath = __dirname + "/adminUpdate/bietdanh.json";
  var chudePath = __dirname + "/adminUpdate/chude.json";
	if (!fs.existsSync(iconPath)) fs.writeFileSync(iconPath, JSON.stringify({}));
  if (!fs.existsSync(namePath)) fs.writeFileSync(namePath, JSON.stringify({}));
  if (!fs.existsSync(bietdanhPath)) fs.writeFileSync(bietdanhPath, JSON.stringify({}));
  if (!fs.existsSync(chudePath)) fs.writeFileSync(chudePath, JSON.stringify({}));

  const moment = require("moment-timezone");
  var tg = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    const { threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;

    const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["adminUpdate"] != "undefined" && thread["adminUpdate"] == false) return;

    try {
        let dataThread = (await getData(threadID)).threadInfo;
        switch (logMessageType) {
            case "log:thread-admins": {
                 if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====『 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 』=====\n\n${event.logMessageBody}\n➢ Chức vụ cũ: Thành Viên\n\n====『 ${tg} 』====`, threadID);
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====『 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 』=====\n\n${event.logMessageBody}\n➢ Chức vụ cũ: Quản Trị Viên\n\n====『 ${tg} 』====`, threadID, async (error, info) => {
                	preIcon[threadID] = dataThread.threadIcon;
                	fs.writeFileSync(iconPath, JSON.stringify(preIcon));
                    });
                }
                break;
            }

            case "log:user-nickname": {
                let preBietdanh = JSON.parse(fs.readFileSync(bietdanhPath));           dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                if (typeof global.configModule["nicknames"] != "undefined" && !global.configModule["nicknames"].allowChange.includes(threadID) && !dataThread.adminIDs.some(item => item.id == event.author) || event.author == api.getCurrentUserID()) return;
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====『 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 』=====\n\n${event.logMessageBody}\n➢ Biệt danh cũ: ${preBietdanh[logMessageData.participant_id+threadID] || await Users.getNameUser(logMessageData.participant_id)}\n\n====『 ${tg} 』====`, threadID, async (error, info) => {
                	preBietdanh[logMessageData.participant_id+threadID] = logMessageData.nickname;
                	fs.writeFileSync(bietdanhPath, JSON.stringify(preBietdanh));
                });
                break;
            }

            case "log:thread-name": {
              let preName = JSON.parse(fs.readFileSync(namePath));
                dataThread.threadName = event.logMessageData.name || "Không tên";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====『 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 』=====\n\n${event.logMessageBody}\n➢ Tên cũ: ${preName[threadID] || "không rõ" || event.logMessageData.name || "Không tên"}\n\n====『 ${tg} 』====`, threadID, async (error, info) => {
                	preName[threadID] = dataThread.threadName;
                	fs.writeFileSync(namePath, JSON.stringify(preName));
                });
                break;
            }

            case "log:thread-icon": {
            	let preIcon = JSON.parse(fs.readFileSync(iconPath));
            	dataThread.threadIcon = event.logMessageData.thread_icon || "👍";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====『 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 』=====\n\n${event.logMessageBody}\n➢ Lịch sử icon: ${preIcon[threadID] || "không rõ"}\n\n====『 ${tg} 』====`, threadID, async (error, info) => {
                	preIcon[threadID] = event.logMessageBody.replace(`đã đặt biểu tượng cảm xúc thành`, "đặt icon là =>")
                	fs.writeFileSync(iconPath, JSON.stringify(preIcon));
                });
                break;
            }
             case "log:thread-color": {
let preChude = JSON.parse(fs.readFileSync(chudePath));
            	dataThread.threadColor = event.logMessageData.thread_color || "🌤";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`=====『 𝗚𝗥𝗢𝗨𝗣 𝗨𝗣𝗗𝗔𝗧𝗘 』=====\n\n${event.logMessageBody}\n➢ Lịch sử color: ${preChude[threadID] || "không rõ"}\n\n====『 ${tg} 』====`, threadID, async (error, info) => {
                  preChude[threadID] = event.logMessageBody.replace(`đã thay đổi màu sắc chủ đề của đoạn chat thành`, "đặt color là =>")
                	fs.writeFileSync(chudePath, JSON.stringify(preChude));
                });
                break;
            }
        }
        await setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
                                                                                                                         }