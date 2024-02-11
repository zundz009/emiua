module.exports.config = {
  name: "thitam",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Chọn ngẫu nhiên số thành viên trong box",
  commandCategory: "Box chat",
  cooldowns: 0
};
module.exports.run = async ({ api, event, args, Users }) => {
  const { threadID, messageID, participantIDs, isGroup } = event;
  const num = parseInt(args[0]) || 1;
  if(isGroup == false) return api.sendMessage('Vui lòng thực hiện lệnh này ở nhóm!', threadID, messageID);
  const random = participantIDs.sort(function() {
        return .5 - Math.random();
    }); 
    const members = [];
    for( let i = 0; i <= num - 1; i++) {
      var 
        name = (await Users.getData(random[i])).name,
        {nicknames} = await api.getThreadInfo(threadID);
      members.push((i) + '. ' + name + ` ( ${nicknames[random[i]] || 'Chưa đặt biệt danh'} )`)
    }
  return api.sendMessage(`Hôm nay Trẫm sẽ lật thẻ bài của:\n${members.join('\n')}`, threadID, messageID);
}
