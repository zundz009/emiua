
//this is my source code, pls dont mod them  
const { spawn } = 
require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const chalk = require("chalk");
const logger = require("./utils/log");

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semver.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);


logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("Restarting...");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Open ...");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


axios.get("https://raw.githubusercontent.com/HuykaiserVIP/kaiser-bot/main/package.json").then((res) => {
    logger(res['data']['name'], "[ Bypass ]");
    logger("Version: " + res['data']['version'], "[ Phiên Bản ]");
    logger(res['data']['description'], "[ DESCRIPTION ]");
});
startBot();

const config = {
	status: true,
	name: 'HuyKaiser Project',
	timestamp: Date.now()
};

if(config.status == false) return
var username = process.env.REPL_OWNER
if(username !== undefined) {
	var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
	logger('Bạn đang chạy bot ở link: ' + urlRepl, '[ CHECK HOST ]');
	if(process.env.REPLIT_CLUSTER == 'hacker') return logger('Bạn đang dùng Replit Hacker, hãy nhớ bật "Always On" để BOT luôn chạy nhé!', '[ CHECK HOST ]');
	logger('Bạn đang dùng Replit thường, hệ thống sẽ tự động kết nối với UptimeRobot cho bạn!', '[ CHECK HOST ]');
	connectUptime(urlRepl, config.name);
};
async function connectUptime(url, name) {
	try {
		const res = (await axios.get(`https://uptime.huykaiser.tk/?add=${url}`)).data;
		if(res.error) return logger('Đã hoàn thành kết nối Uptime cho bạn!', '[ UPTIME ]');
		return logger('Đã hoàn thành kết nối Uptime cho bạn!', '[ UPTIME ]');
	}
	catch {
		return logger('Server Uptime gặp sự cố, không thể bật uptime cho bạn!', '[ UPTIME ]');
	}	
  };