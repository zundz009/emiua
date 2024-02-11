exports.config = {
    name: 'anti',
    version: '0.0.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: '',
    commandCategory: 'Admin',
    usages: '[]',
    cooldowns: 3
};
let path = __dirname+'/cache/status-anti.nam.json';
let data = {};
let save = ()=>require('fs').writeFileSync(path, JSON.stringify(data));

if (!require('fs').existsSync(path))save(); else data = JSON.parse(require('fs').readFileSync(path));

exports.run = o=>(c=t=>!(data[o.event.threadID]||{})[t]?'off':'on',o.api.sendMessage(`==== 『Anti 』 ====
┏━━━━━━━━━━━━━┓
┣➤1.𝐀𝐧𝐭𝐢 𝐧𝐚𝐦𝐞𝐛𝐨𝐱 : 𝐂𝐡𝐨́𝐧𝐠 đ𝐨̂̉𝐢 𝐭𝐞̂𝐧 𝐛𝐨𝐱 - ${c('nb')}
┣➤2.𝐀𝐧𝐭𝐢 𝐚𝐯𝐚𝐭𝐚𝐫 𝐛𝐨𝐱 : 𝐂𝐡𝐨́𝐧𝐠 đ𝐨̂̉𝐢 𝐚̉𝐧𝐡 𝐧𝐡𝐨́𝐦 - ${c('at')}
┣➤3.𝐀𝐧𝐭𝐢 𝐧𝐚𝐦𝐞 : 𝐂𝐡𝐨́𝐧𝐠 đ𝐨̂̉𝐢 𝐛𝐢𝐞̣̂𝐭 𝐝𝐚𝐧𝐡 - ${c('bd')}
┣➤4.𝐀𝐧𝐭𝐢 𝐨𝐮𝐭: 𝐂𝐡𝐨̂́𝐧𝐠 𝐨𝐮𝐭 𝐜𝐡𝐮̀𝐚 - ${c('o')}
┣➤5.𝐐𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐨𝐧𝐥𝐲 - ${c('ato')}
┣➤6.𝐀𝐃𝐌𝐈𝐍 𝐨𝐧𝐥𝐲 - ${c('abo')}
┗━━━━━ `, o.event.threadID, (err, res)=>(res.name = exports.config.name, res.o = o, global.client.handleReply.push(res))));
exports.handleReply = ({
    handleReply: _,
    event: {
        senderID: sid,
        threadID: tid,
        args,
    },
    api,
})=> {
    let send = msg=>api.sendMessage(msg, tid);

    if (_.o.event.senderID != sid)return;
    if (!data[tid])data[tid] = {};

    let t = data[tid];
    let msg;

    switch (args[0]) {
        case '1':
            t.nb = !t.nb?true: false;
            msg = `[𝐁𝐎𝐓🎀] »${t.nb?'bật': 'tắt'} chống đổi tên nhóm`;
            break;
        case '3':
            t.bd = !t.bd?true: false;
            msg = `[𝐁𝐎𝐓🎀] »${t.bd?'bật': 'tắt'} chống đổi biệt danh`;
            break;
        case '4':
            t.o = !t.o?true: false;
            msg = `[𝐁𝐎𝐓🎀] »${t.o?'bật': 'tắt'} chống rời nhóm`;
            break;
        case '5':
            t.ato = !t.ato?true:false;
            msg = `[𝐁𝐎𝐓🎀] »${t.ato?'bật':'tắt'} chỉ QTV nhóm/bot dùng lệnh`;
            break;
        case '6':
            t.abo = !t.abo?true:false;
            msg = `[🎀] »${t.abo?'bật':'tắt'} chỉ QTV bot dùng lệnh`;
            break;
        default:
            msg = `[𝐁𝐎𝐓🎀] »chưa hỗ trợ`;
            break;
    };

    save();
    send(msg);
};