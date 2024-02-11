'use strict';

/!-[ Require config and use ]-!/

if (global.Fca.Require.FastConfig.Config != 'default') {
  //do ssth
}

const Language = global.Fca.Require.languageFile.find((/** @type {{ Language: string; }} */i) => i.Language == global.Fca.Require.FastConfig.Language).Folder.Index;

/!-[ Require All Package Need Use ]-!/

var utils = global.Fca.Require.utils,
  logger = global.Fca.Require.logger,
  fs = global.Fca.Require.fs,
  getText = global.Fca.getText,
  log = global.Fca.Require.log,
  express = require("express")(),
  { join } = require('path'),
  cheerio = require("cheerio"),
  { readFileSync } = require('fs-extra'),
  Database = require("./Extra/Database"),
  readline = require("readline"),
  chalk = require("chalk"),
  figlet = require("figlet"),
  os = require("os"),
  deasync = require('deasync'),
  Security = require("./Extra/Security/Index"),
  { getAll, deleteAll } = require('./Extra/ExtraGetThread');

/!-[ Set Variable For Process ]-!/

log.maxRecordSize = 100;
var checkVerified = null;
const Boolean_Option = ['online', 'selfListen', 'listenEvents', 'updatePresence', 'forceLogin', 'autoMarkDelivery', 'autoMarkRead', 'listenTyping', 'autoReconnect', 'emitReady'];

/!-[ Set And Check Template HTML ]-!/

const css = readFileSync(join(__dirname, 'Extra', 'Html', 'Classic', 'style.css'));
const js = readFileSync(join(__dirname, 'Extra', 'Html', 'Classic', 'script.js'));

/!-[ Function Generate HTML Template ]-!/

/**
 * It returns a string of HTML code.
 * @param UserName - The username of the user
 * @param Type - The type of user, either "Free" or "Premium"
 * @param link - The link to the music you want to play
 * @returns A HTML file
 */

function ClassicHTML(Title, UserName, Description, FacebookLink, AvtLink) {
  return `<!DOCTYPE HTML>
    <html lang="en">
        <head>
            <title>${Title}</Title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta name="color-scheme" content="light only"/>
            <meta name="description" content="${Title}"/>
            <meta property="og:site_name" content="${Title}"/>
            <meta property="og:title" content="${Title}"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="${Title}"/>
            <meta property="og:image:type" content="image/jpeg"/>
            <meta property="og:image:width" content="1280"/>
            <meta property="og:image:height" content="800"/>
            <meta property="twitter:card" content="summary_large_image"/>
            <link href="https://fonts.googleapis.com/css2?display=swap&family=Inter:ital,wght@0,500;0,600;1,500;1,600" rel="stylesheet" type="text/css"/>
            <link rel="stylesheet" href="./style.css">
        </head>
        <body class="is-loading">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" display="none" width="0" height="0">
                <symbol id="icon-021973a1bb185878b41e1ef48ed6bbaa" viewBox="0 0 40 40">
                    <path d="M35.7,13c-1.6-2-3.8-3.5-6.5-4.7c-2.8-1.1-5.8-1.7-9-1.7c-2.4,0-4.8,0.3-7,1C10.9,8.2,9,9.2,7.4,10.3 c-1.6,1.2-2.9,2.5-3.8,4.1c-1,1.6-1.4,3.3-1.4,5c0,2,0.6,3.9,1.8,5.7c1.2,1.8,2.9,3.2,5,4.4c-0.1,0.5-0.3,1-0.5,1.5 c-0.2,0.5-0.4,0.9-0.5,1.2c-0.2,0.3-0.4,0.7-0.7,1c-0.3,0.4-0.5,0.6-0.6,0.8c-0.1,0.2-0.4,0.4-0.7,0.8c-0.3,0.4-0.5,0.6-0.6,0.7 c0,0-0.1,0.1-0.2,0.2C5,35.8,5,35.8,5,35.8L4.8,36c-0.1,0.1-0.1,0.2-0.1,0.2c0,0,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2v0 c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.1,0.4,0.2,0.6,0.2C6.6,37.3,7.3,37.2,8,37c3.5-0.9,6.6-2.5,9.2-4.9c1,0.1,2,0.2,2.9,0.2 c3.3,0,6.3-0.6,9-1.7c2.8-1.1,4.9-2.7,6.5-4.7c1.6-2,2.4-4.1,2.4-6.5C38.1,17.1,37.3,14.9,35.7,13z"/>
                </symbol>
                <symbol id="icon-694b338299bf630d8d2ec9bd42d31dbe" viewBox="0 0 40 40">
                    <path d="M36.1,11.7v5c-3.3,0-6.3-1-8.8-2.8v12.9c0,6.5-5.2,11.7-11.7,11.7c-2.4,0-4.6-0.7-6.5-2c0,0,0,0,0,0 c-3.1-2.1-5.2-5.7-5.2-9.7c0-6.5,5.2-11.7,11.7-11.7c0.5,0,1.1,0,1.6,0.1v1.4c0,0,0,0,0,0v5c-0.5-0.2-1.1-0.3-1.6-0.3 c-2.9,0-5.3,2.4-5.3,5.4c0,2.1,1.2,3.9,2.9,4.8c0.7,0.4,1.5,0.6,2.4,0.6c2.9,0,5.3-2.4,5.3-5.3V1.5h6.3v0.8c0,0.2,0.1,0.5,0.1,0.7 c0.4,2.5,1.9,4.7,4,6c0,0,0.1,0.1,0.1,0.1c0,0-0.1-0.1-0.1-0.1c1.4,0.9,3,1.3,4.7,1.3V11.7"/>
                </symbol>
                <symbol id="icon-ee3f4c4dd1c95bbfa424b0cab69e93b3" viewBox="0 0 40 40">
                    <path d="M38.1,29.5c-0.1,0.1-0.1,0.2-0.2,0.3c-0.9,1.4-2.5,2.7-5.1,2.7l0,0c-1.7,0-3.3-0.4-5-2c-1.3-1.2-2.8-3.4-4-5.4 l-3.5-5.8c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1,0.2-0.2,0.4-0.3,0.5l-1.2,2.2c-2.5,4.4-3.1,5.4-4.3,7c-2.2,2.9-4,4-6.4,4 c-2.9,0-4.7-1.2-5.8-3.1c-0.9-1.5-1.4-3.5-1.4-5.8c0-4.2,1.1-8.5,3.3-11.9c1.9-3,4.7-5.1,7.9-5.1c1.9,0,3.7,0.5,5.6,2.1 c1,0.8,2.1,1.9,3.2,3.3c0.9-1.2,1.9-2.4,3-3.3c1.6-1.4,3.3-2.1,5-2.1c2.9,0,5.6,1.7,7.7,4.8c2.3,3.4,3.4,7.7,3.4,12.1 C39.5,26,39,28,38.1,29.5z M16,13.1c-1-1.1-2.3-2.3-4.3-2.3c-1.7,0-3.1,1.2-4.3,2.9c-1.7,2.5-2.7,6.3-2.7,9.9c0,1.5,0.3,2.6,0.8,3.3 c0.6,0.9,1.4,1.3,2.2,1.3c1.1,0,2.1-0.3,4-2.9c1.6-2.1,3.4-5.2,4.6-7l1.7-2.5C17.2,14.6,16.5,13.7,16,13.1z M33.1,13.1 c-1.3-2-3-3.2-4.9-3.2c-2,0-3.6,1.5-5.5,4.2c-0.1,0.2-0.2,0.3-0.3,0.5c0.6,1,1.3,2,2,3.2l1,1.7c2.4,4,3.8,6.1,4.6,7.1 c1,1.3,1.8,1.6,2.7,1.6c2.4,0,3-2.2,3-4.7C35.8,19.9,34.9,16,33.1,13.1z"/>
                </symbol>
                <symbol id="icon-3b7eeeccbb457780f277fce4669f67a0" viewBox="0 0 40 40">
                    <path d="M33.2,8.3c-2.5-1.1-5.1-1.9-7.9-2.4c-0.3,0.6-0.7,1.4-1,2c-2.9-0.4-5.8-0.4-8.7,0c-0.3-0.6-0.7-1.4-1-2 c-2.8,0.5-5.4,1.3-7.9,2.4c-5,7.2-6.3,14.2-5.6,21.1c3.3,2.3,6.5,3.8,9.6,4.7c0.8-1,1.5-2.1,2.1-3.3c-1.1-0.4-2.2-0.9-3.2-1.5 c0.3-0.2,0.5-0.4,0.8-0.6c6.3,2.8,13,2.8,19.2,0c0.3,0.2,0.5,0.4,0.8,0.6c-1,0.6-2.1,1.1-3.2,1.5c0.6,1.1,1.3,2.2,2.1,3.3 c3.1-0.9,6.3-2.4,9.6-4.7C39.7,21.4,37.5,14.4,33.2,8.3z M13.7,25.1c-1.9,0-3.4-1.7-3.4-3.7s1.5-3.7,3.4-3.7c1.9,0,3.5,1.7,3.4,3.7 C17.1,23.4,15.6,25.1,13.7,25.1z M26.3,25.1c-1.9,0-3.4-1.7-3.4-3.7s1.5-3.7,3.4-3.7c1.9,0,3.5,1.7,3.4,3.7 C29.7,23.4,28.2,25.1,26.3,25.1z"/>
                </symbol>
            </svg>
            <div id="wrapper">
                <div id="main">
                    <div class="inner">
                        <div id="container02" class="container default full">
                            <div class="wrapper">
                                <div class="inner">
                                    <div id="image05" class="image">
                                        <span class="frame">
                                            <img src="${AvtLink}" alt=""/>
                                        </span>
                                    </div>
                                    <h2 id="text45">${UserName}</h2>
                                    <p id="text46">
                                        <span class="p">
                                            ${Description}
                                        </span>
                                    </p>
                                    <ul id="buttons01" class="buttons">
                                        <li>
                                            <a href="${FacebookLink}" class="button n01">
                                                <svg>
                                                    <use xlink:href="#icon-021973a1bb185878b41e1ef48ed6bbaa"></use>
                                                </svg>
                                                <span class="label">Contact For Me</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="credits" class="icc-credits">
                            <span>
                                <a href="https://www.npmjs.com/package/fca-zeid">Made with Fca-Zeid</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <script  src="./script.js"></script>
        </body>
    </html>`
}



/!-[ Stating Http Infomation ]-!/

express.set('DFP', (process.env.PORT || process.env.port || global.Fca.Require.FastConfig.HTML.Port));

express.use(function(req, res, next) {
  switch (req.url.split('?')[0]) {
    case '/script.js': {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(js);
      break;
    }
    case '/style.css': {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(css);
      break;
    }
    // case '/History': {
    //     if (req.query.PassWord == process.env.REPL_OWNER) {
    //         res.writeHead(200, { 'Content-Type': 'application/json charset=utf-8' });
    //         res.write(JSON.stringify(console.history,null,2),'utf8');
    //         res.end();
    //     }
    //     else res.json({
    //         Status: false,
    //         Error: "Thiếu Params ?PassWord=PassWordCuaBan =))"
    //     });
    //     break;
    // }
    default: {
      res.writeHead(200, "OK", { "Content-Type": "text/html" });
      res.write(ClassicHTML(global.Fca.Require.FastConfig.HTML.Title, global.Fca.Require.FastConfig.HTML.UserName, global.Fca.Require.FastConfig.HTML.Description, global.Fca.Require.FastConfig.HTML.FacebookLink, global.Fca.Require.FastConfig.HTML.AvtLink));
    }
  }
  res.end();
})

var Server;
if (global.Fca.Require.FastConfig.HTML.HTML) Server = express.listen(express.get('DFP'));

/ !-[Function setOptions] - !/

/**
 * @param {{ [x: string]: boolean; selfListen?: boolean; listenEvents?: boolean; listenTyping?: boolean; updatePresence?: boolean; forceLogin?: boolean; autoMarkDelivery?: boolean; autoMarkRead?: boolean; autoReconnect?: boolean; logRecordSize: any; online?: boolean; emitReady?: boolean; userAgent: any; logLevel?: any; pageID?: any; proxy?: any; }} globalOptions
 * @param {{ [x: string]: any; logLevel?: any; forceLogin?: boolean; userAgent?: any; pauseLog?: any; logRecordSize?: any; pageID?: any; proxy?: any; }} options
 */

function setOptions(globalOptions, options) {
  Object.keys(options).map(function(key) {
    switch (Boolean_Option.includes(key)) {
      case true: {
        globalOptions[key] = Boolean(options[key]);
        break;
      }
      case false: {
        switch (key) {
          case 'pauseLog': {
            if (options.pauseLog) log.pause();
            else log.resume();
            break;
          }
          case 'logLevel': {
            log.level = options.logLevel;
            globalOptions.logLevel = options.logLevel;
            break;
          }
          case 'logRecordSize': {
            log.maxRecordSize = options.logRecordSize;
            globalOptions.logRecordSize = options.logRecordSize;
            break;
          }
          case 'pageID': {
            globalOptions.pageID = options.pageID.toString();
            break;
          }
          case 'userAgent': {
            globalOptions.userAgent = (options.userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36');
            break;
          }
          case 'proxy': {
            if (typeof options.proxy != "string") {
              delete globalOptions.proxy;
              utils.setProxy();
            } else {
              globalOptions.proxy = options.proxy;
              utils.setProxy(globalOptions.proxy);
            }
            break;
          }
          default: {
            log.warn("setOptions", "Unrecognized option given to setOptions: " + key);
            break;
          }
        }
        break;
      }
    }
  });
}

/!-[ Function BuildAPI ]-!/

/**
 * @param {any} globalOptions
 * @param {string} html
 * @param {{ getCookies: (arg0: string) => any[]; }} jar
 */

function buildAPI(globalOptions, html, jar) {
  var maybeCookie = jar.getCookies("https://www.facebook.com").filter(function(/** @type {{ cookieString: () => string; }} */val) { return val.cookieString().split("=")[0] === "c_user"; });

  if (maybeCookie.length === 0) {
    if (global.Fca.Require.FastConfig.AutoLogin) {
      return global.Fca.Require.logger.Warning(global.Fca.Require.Language.Index.AutoLogin, function() {
        global.Fca.Action('AutoLogin')
      });
    }
    else if (!global.Fca.Require.FastConfig.AutoLogin) {
      return global.Fca.Require.logger.Error(global.Fca.Require.Language.Index.ErrAppState);
    }
  }
  else {
    if (html.indexOf("/checkpoint/block/?next") > -1) log.warn("login", Language.CheckPointLevelI);

    var userID = maybeCookie[0].cookieString().split("=")[1].toString();
    process.env['UID'] = logger.Normal(getText(Language.UID, userID), userID);

    try {
      clearInterval(checkVerified);
    } catch (e) {
      console.log(e);
    }

    var clientID = (Math.random() * 2147483648 | 0).toString(16);

    var CHECK_MQTT = {
      oldFBMQTTMatch: html.match(/irisSeqID:"(.+?)",appID:219994525426954,endpoint:"(.+?)"/),
      newFBMQTTMatch: html.match(/{"app_id":"219994525426954","endpoint":"(.+?)","iris_seq_id":"(.+?)"}/),
      legacyFBMQTTMatch: html.match(/(\["MqttWebConfig",\[\],{fbid:")(.+?)(",appID:219994525426954,endpoint:")(.+?)(",pollingEndpoint:")(.+?)(3790])/)
    }

    let Slot = Object.keys(CHECK_MQTT);

    var mqttEndpoint, region, irisSeqID;
    Object.keys(CHECK_MQTT).map(function(MQTT) {
      if (CHECK_MQTT[MQTT] && !region) {
        switch (Slot.indexOf(MQTT)) {
          case 0: {
            irisSeqID = CHECK_MQTT[MQTT][1];
            mqttEndpoint = CHECK_MQTT[MQTT][2];
            region = new URL(mqttEndpoint).searchParams.get("region").toUpperCase();
            return;
          }
          case 1: {
            irisSeqID = CHECK_MQTT[MQTT][2];
            mqttEndpoint = CHECK_MQTT[MQTT][1].replace(/\\\//g, "/");
            region = new URL(mqttEndpoint).searchParams.get("region").toUpperCase();
            return;
          }
          case 2: {
            mqttEndpoint = CHECK_MQTT[MQTT][4];
            region = new URL(mqttEndpoint).searchParams.get("region").toUpperCase();
            return;
          }
        }
        return;
      }
    });

    var ctx = {
      userID: userID,
      jar: jar,
      clientID: clientID,
      globalOptions: globalOptions,
      loggedIn: true,
      access_token: 'NONE',
      clientMutationId: 0,
      mqttClient: undefined,
      lastSeqId: irisSeqID,
      syncToken: undefined,
      mqttEndpoint: mqttEndpoint,
      region: region,
      firstListen: true
    };

    var api = {
      setOptions: setOptions.bind(null, globalOptions),
      getAppState: function getAppState() {
        return utils.getAppState(jar);
      }
    };

    if (region && mqttEndpoint) {
      //do sth
    }
    else {
      log.warn("login", getText(Language.NoAreaData));
      api["htmlData"] = html;
    }

    var defaultFuncs = utils.makeDefaults(html, userID, ctx);

    fs.readdirSync(__dirname + "/src").filter((/** @type {string} */File) => File.endsWith(".js") && !File.includes('Dev_')).map((/** @type {string} */File) => {
      if (File == 'getThreadInfo.js' && global.Fca.Require.FastConfig.AntiGetInfo.AntiGetThreadInfo != true || File == 'getUserInfo.js' && global.Fca.Require.FastConfig.AntiGetInfo.AntiGetUserInfo != true) api[File.split('.').slice(0, -1).join('.')] = require('./src/' + (File.includes('getThreadInfo') ? 'getThreadMain.js' : 'getUserInfoMain.js'))(defaultFuncs, api, ctx)
      else api[File.split('.').slice(0, -1).join('.')] = require('./src/' + File)(defaultFuncs, api, ctx)
    });

    return {
      ctx,
      defaultFuncs,
      api
    };
  }
}

/!-[ Function makeLogin ]-!/

/**
 * @param {{ setCookie: (arg0: any, arg1: string) => void; }} jar
 * @param {any} email
 * @param {any} password
 * @param {{ forceLogin: any; }} loginOptions
 * @param {(err: any, api: any) => any} callback
 * @param {any} prCallback
 */

function makeLogin(jar, email, password, loginOptions, callback, prCallback) {
  return function(res) {
    var html = res.body, $ = cheerio.load(html), arr = [];

    $("#login_form input").map((i, v) => arr.push({ val: $(v).val(), name: $(v).attr("name") }));

    arr = arr.filter(function(v) {
      return v.val && v.val.length;
    });
    var form = utils.arrToForm(arr);
    form.lsd = utils.getFrom(html, "[\"LSD\",[],{\"token\":\"", "\"}");
    form.lgndim = Buffer.from("{\"w\":1440,\"h\":900,\"aw\":1440,\"ah\":834,\"c\":24}").toString('base64');
    form.email = email;
    form.pass = password;
    form.default_persistent = '0';
    form.locale = 'en_US';
    form.timezone = '240';
    form.lgnjs = ~~(Date.now() / 1000);

    html.split("\"_js_").slice(1).map((val) => {
      jar.setCookie(utils.formatCookie(JSON.parse("[\"" + utils.getFrom(val, "", "]") + "]"), "facebook"), "https://www.facebook.com")
    });

    logger.Normal(Language.OnLogin);
    return utils
      .post("https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110", jar, form, loginOptions)
      .then(utils.saveCookies(jar))
      .then(function(/** @type {{ headers: any; }} */res) {
        var headers = res.headers;
        if (!headers.location) throw { error: Language.InvaildAccount };

        // This means the account has login approvals turned on.
        if (headers.location.indexOf('https://www.facebook.com/checkpoint/') > -1) {
          logger.Warning(Language.TwoAuth);
          var nextURL = 'https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2Fhome.php';

          return utils
            .get(headers.location, jar, null, loginOptions)
            .then(utils.saveCookies(jar))
            .then(function(res) {
              if (!Database().get('ThroughAcc')) {
                Database().set('ThroughAcc', email);
              }
              else {
                if (String((Database().get('ThroughAcc'))).replace(RegExp('"', 'g'), '') != String(email).replace(RegExp('"', 'g'), '')) {
                  Database().set('ThroughAcc', email);
                  if (Database().get('Through2Fa')) {
                    Database().delete('Through2Fa');
                  }
                }
              }
              var html = res.body, $ = cheerio.load(html), arr = [];
              $("form input").map((i, v) => arr.push({ val: $(v).val(), name: $(v).attr("name") }));
              arr = arr.filter(v => { return v.val && v.val.length });
              var form = utils.arrToForm(arr);
              if (html.indexOf("checkpoint/?next") > -1) {
                setTimeout(() => {
                  checkVerified = setInterval((_form) => { }, 5000, {
                    fb_dtsg: form.fb_dtsg,
                    jazoest: form.jazoest,
                    dpr: 1
                  });
                }, 2500);
                switch (global.Fca.Require.FastConfig.Login2Fa) {
                  case true: {
                    const question = question => {
                      const rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                      });
                      var done, answ;
                      rl.question(question, answer => {
                        rl.close();
                        answ = answer;
                        done = true
                      })
                      deasync.loopWhile(function() {
                        return !done;
                      });
                      return answ;
                    };
                    try {
                      const Old_Cookie = Database().get('Through2Fa');
                      if (Old_Cookie) {
                        Old_Cookie.map(function(/** @type {{ key: string; value: string; expires: string; domain: string; path: string; }} */c) {
                          let str = c.key + "=" + c.value + "; expires=" + c.expires + "; domain=" + c.domain + "; path=" + c.path + ";";
                          jar.setCookie(str, "http://" + c.domain);
                        });
                        let Form = utils.arrToForm(arr);
                        Form.lsd = utils.getFrom(html, "[\"LSD\",[],{\"token\":\"", "\"}");
                        Form.lgndim = Buffer.from("{\"w\":1440,\"h\":900,\"aw\":1440,\"ah\":834,\"c\":24}").toString('base64');
                        Form.email = email;
                        Form.pass = password;
                        Form.default_persistent = '0';
                        Form.locale = 'en_US';
                        Form.timezone = '240';
                        Form.lgnjs = ~~(Date.now() / 1000);
                        return utils
                          .post("https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110", jar, Form, loginOptions)
                          .then(utils.saveCookies(jar))
                          .then(function(res) {
                            let headers = res.headers
                            if (!headers['set-cookie'][0].includes('deleted')) {
                              logger.Warning(Language.ErrThroughCookies, function() {
                                Database().delete('Through2Fa');
                              });
                              process.exit(1);
                            }
                            if (headers.location && headers.location.indexOf('https://www.facebook.com/checkpoint/') > -1) {
                              return utils
                                .get(headers.location, jar, null, loginOptions)
                                .then(utils.saveCookies(jar))
                                .then(function(res) {
                                  var html = res.body, $ = cheerio.load(html), arr = [];
                                  $("form input").map((i, v) => arr.push({ val: $(v).val(), name: $(v).attr("name") }));
                                  arr = arr.filter(v => { return v.val && v.val.length });
                                  var Form = utils.arrToForm(arr);

                                  if (html.indexOf("checkpoint/?next") > -1) {
                                    setTimeout(() => {
                                      checkVerified = setInterval((_form) => { }, 5000, {
                                        fb_dtsg: Form.fb_dtsg,
                                        jazoest: Form.jazoest,
                                        dpr: 1
                                      });
                                    }, 2500);

                                    if (!res.headers.location && res.headers['set-cookie'][0].includes('checkpoint')) {
                                      try {
                                        delete Form.name_action_selected;
                                        Form['submit[Continue]'] = $("#checkpointSubmitButton").html();
                                        return utils
                                          .post(nextURL, jar, Form, loginOptions)
                                          .then(utils.saveCookies(jar))
                                          .then(function() {
                                            Form['submit[This was me]'] = "This was me";
                                            return utils.post(nextURL, jar, Form, loginOptions).then(utils.saveCookies(jar));
                                          })
                                          .then(function() {
                                            delete Form['submit[This was me]'];
                                            Form.name_action_selected = 'save_device';
                                            Form['submit[Continue]'] = $("#checkpointSubmitButton").html();
                                            return utils.post(nextURL, jar, Form, loginOptions).then(utils.saveCookies(jar));
                                          })
                                          .then(function(res) {
                                            var headers = res.headers;
                                            if (!headers.location && res.headers['set-cookie'][0].includes('checkpoint')) {
                                              Database().delete('Through2Fa');
                                              process.exit(1);
                                            }
                                            var appState = utils.getAppState(jar, false);
                                            Database().set('Through2Fa', appState);
                                            return loginHelper(appState, email, password, loginOptions, callback);
                                          })
                                          .catch((e) => callback(e));
                                      }
                                      catch (e) {
                                        console.log(e)
                                      }
                                    }
                                  }
                                })
                            }
                            return utils.get('https://www.facebook.com/', jar, null, loginOptions).then(utils.saveCookies(jar));
                          })
                          .catch((e) => console.log(e));
                      }
                    }
                    catch (e) {
                      Database().delete('Through2Fa');
                    }
                    const Otp_code = require('totp-generator');
                    const Code = global.Fca.Require.FastConfig.AuthString.includes('|') == false ? Otp_code(global.Fca.Require.FastConfig.AuthString.includes(" ") ? global.Fca.Require.FastConfig.AuthString.replace(RegExp(" ", 'g'), "") : global.Fca.Require.FastConfig.AuthString) : question(Language.EnterSecurityCode);
                    try {
                      const approvals = function(N_Code) {
                        form.approvals_code = N_Code;
                        form['submit[Continue]'] = $("#checkpointSubmitButton").html();
                        var prResolve, prReject;
                        var rtPromise = new Promise((resolve, reject) => { prResolve = resolve; prReject = reject; });

                        if (typeof N_Code == "string") {
                          utils
                            .post(nextURL, jar, form, loginOptions)
                            .then(utils.saveCookies(jar))
                            .then(function(res) {
                              var $ = cheerio.load(res.body);
                              var error = $("#approvals_code").parent().attr("data-xui-error");
                              if (error) {
                                logger.Warning(Language.InvaildTwoAuthCode, function() { approvals(question(Language.EnterSecurityCode)) }); //bruh loop
                              };
                            })
                            .then(function() {
                              delete form.no_fido; delete form.approvals_code;
                              form.name_action_selected = 'save_device'; //'save_device' || 'dont_save;
                              return utils.post(nextURL, jar, form, loginOptions).then(utils.saveCookies(jar));
                            })
                            .then(function(res) {
                              var headers = res.headers;
                              if (!headers.location && res.headers['set-cookie'][0].includes('checkpoint')) {
                                try {
                                  delete form.name_action_selected;
                                  form['submit[Continue]'] = $("#checkpointSubmitButton").html();
                                  return utils
                                    .post(nextURL, jar, form, loginOptions)
                                    .then(utils.saveCookies(jar))
                                    .then(function() {
                                      form['submit[This was me]'] = "This was me";
                                      return utils.post(nextURL, jar, form, loginOptions).then(utils.saveCookies(jar));
                                    })
                                    .then(function() {
                                      delete form['submit[This was me]'];
                                      form.name_action_selected = 'save_device';
                                      form['submit[Continue]'] = $("#checkpointSubmitButton").html();
                                      return utils.post(nextURL, jar, form, loginOptions).then(utils.saveCookies(jar));
                                    })
                                    .then(function(res) {
                                      var headers = res.headers;
                                      if (!headers.location && res.headers['set-cookie'][0].includes('checkpoint')) throw { error: "wtf ??:D" };
                                      var appState = utils.getAppState(jar, false);
                                      Database().set('Through2Fa', appState);
                                      return loginHelper(appState, email, password, loginOptions, callback);
                                    })
                                    .catch((e) => callback(e));
                                }
                                catch (e) {
                                  console.log(e)
                                }
                              }
                              var appState = utils.getAppState(jar, false);
                              if (callback === prCallback) {
                                callback = function(err, api) {
                                  if (err) return prReject(err);
                                  return prResolve(api);
                                };
                              }
                              Database().set('Through2Fa', appState);
                              return loginHelper(appState, email, password, loginOptions, callback);
                            })
                            .catch(function(err) {
                              if (callback === prCallback) prReject(err);
                              else callback(err);
                            });
                        }
                        else {
                          utils
                            .post("https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2Fhome.php", jar, form, loginOptions, null, { "Referer": "https://www.facebook.com/checkpoint/?next" })
                            .then(utils.saveCookies(jar))
                            .then(function(res) {
                              try {
                                JSON.parse(res.body.replace(/for\s*\(\s*;\s*;\s*\)\s*;\s*/, ""));
                              } catch (ex) {
                                clearInterval(checkVerified);
                                logger.Warning(Language.VerifiedCheck);
                                if (callback === prCallback) {
                                  callback = function(err, api) {
                                    if (err) return prReject(err);
                                    return prResolve(api);
                                  };
                                }
                                let appState = utils.getAppState(jar, false);
                                return loginHelper(appState, email, password, loginOptions, callback);
                              }
                            })
                            .catch((ex) => {
                              log.error("login", ex);
                              if (callback === prCallback) prReject(ex);
                              else callback(ex);
                            });
                        }
                        return rtPromise;
                      }
                      return approvals(Code)
                    }
                    catch (e) {
                      logger.Error(e)
                      logger.Error();
                      process.exit(0);
                    }
                  }
                  case false: {
                    throw {
                      error: 'login-approval',
                      continue: function submit2FA(code) {
                        form.approvals_code = code;
                        form['submit[Continue]'] = $("#checkpointSubmitButton").html(); //'Continue';
                        var prResolve, prReject;
                        var rtPromise = new Promise((resolve, reject) => { prResolve = resolve; prReject = reject; });
                        if (typeof code == "string") {
                          utils
                            .post(nextURL, jar, form, loginOptions)
                            .then(utils.saveCookies(jar))
                            .then(function(/** @type {{ body: string | Buffer; }} */res) {
                              var $ = cheerio.load(res.body);
                              var error = $("#approvals_code").parent().attr("data-xui-error");
                              if (error) {
                                throw {
                                  error: 'login-approval',
                                  errordesc: Language.InvaildTwoAuthCode,
                                  lerror: error,
                                  continue: submit2FA
                                };
                              }
                            })
                            .then(function() {
                              delete form.no_fido; delete form.approvals_code;
                              form.name_action_selected = 'dont_save'; //'save_device' || 'dont_save;
                              return utils.post(nextURL, jar, form, loginOptions).then(utils.saveCookies(jar));
                            })
                            .then(function(res) {
                              var headers = res.headers;
                              if (!headers.location && res.headers['set-cookie'][0].includes('checkpoint')) throw { error: Language.ApprovalsErr };
                              var appState = utils.getAppState(jar, false);
                              if (callback === prCallback) {
                                callback = function(err, api) {
                                  if (err) return prReject(err);
                                  return prResolve(api);
                                };
                              }
                              return loginHelper(appState, email, password, loginOptions, callback);
                            })
                            .catch(function(err) {
                              if (callback === prCallback) prReject(err);
                              else callback(err);
                            });
                        } else {
                          utils
                            .post("https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2Fhome.php", jar, form, loginOptions, null, { "Referer": "https://www.facebook.com/checkpoint/?next" })
                            .then(utils.saveCookies(jar))
                            .then((res) => {
                              try {
                                JSON.parse(res.body.replace(/for\s*\(\s*;\s*;\s*\)\s*;\s*/, ""));
                              } catch (ex) {
                                clearInterval(checkVerified);
                                logger.Warning(Language.VerifiedCheck);
                                if (callback === prCallback) {
                                  callback = function(err, api) {
                                    if (err) return prReject(err);
                                    return prResolve(api);
                                  };
                                }
                                return loginHelper(utils.getAppState(jar, false), email, password, loginOptions, callback);
                              }
                            })
                            .catch((ex) => {
                              log.error("login", ex);
                              if (callback === prCallback) prReject(ex);
                              else callback(ex);
                            });
                        }
                        return rtPromise;
                      }
                    };
                  }
                }
              } else {
                if (!loginOptions.forceLogin) throw { error: Language.ForceLoginNotEnable };

                if (html.indexOf("Suspicious Login Attempt") > -1) form['submit[This was me]'] = "This was me";
                else form['submit[This Is Okay]'] = "This Is Okay";

                return utils
                  .post(nextURL, jar, form, loginOptions)
                  .then(utils.saveCookies(jar))
                  .then(function() {
                    form.name_action_selected = 'dont_save';

                    return utils.post(nextURL, jar, form, loginOptions).then(utils.saveCookies(jar));
                  })
                  .then(function(res) {
                    var headers = res.headers;

                    if (!headers.location && res.body.indexOf('Review Recent Login') > -1) throw { error: "Something went wrong with review recent login." };

                    var appState = utils.getAppState(jar, false);

                    return loginHelper(appState, email, password, loginOptions, callback);
                  })
                  .catch((e) => callback(e));
              }
            });
        }
        return utils.get('https://www.facebook.com/', jar, null, loginOptions).then(utils.saveCookies(jar));
      });
  };
}

/!-[ Function backup ]-!/

/**
 * @param {string} data
 * @param {any} globalOptions
 * @param {any} callback
 * @param {any} prCallback
 */

function backup(data, globalOptions, callback, prCallback) {
  try {
    var appstate;
    try {
      appstate = JSON.parse(data)
    }
    catch (e) {
      appstate = data;
    }
    logger.Warning(Language.BackupNoti);
    try {
      loginHelper(appstate, null, null, globalOptions, callback, prCallback)
    }
    catch (e) {
      logger.Error(Language.ErrBackup);
      process.exit(0);
    }
  }
  catch (e) {
    return logger.Error();
  }
}

/!-[ function loginHelper ]-!/

/**
 * @param {string | any[]} appState
 * @param {any} email
 * @param {any} password
 * @param {{ selfListen?: boolean; listenEvents?: boolean; listenTyping?: boolean; updatePresence?: boolean; forceLogin?: boolean; autoMarkDelivery?: boolean; autoMarkRead?: boolean; autoReconnect?: boolean; logRecordSize?: number; online?: boolean; emitReady?: boolean; userAgent?: string; pageID?: any; }} globalOptions
 * @param {(arg0: any, arg1: undefined) => void} callback
 * @param {(error: any, api: any) => any} [prCallback]
 */

function loginHelper(appState, email, password, globalOptions, callback, prCallback) {
  var mainPromise = null;
  var jar = utils.getJar();

  try {
    if (appState) {
      logger.Normal(Language.OnProcess);
      switch (Database().has("FBKEY")) {
        case true: {
          process.env.FBKEY = Database().get("FBKEY");
        }
          break;
        case false: {
          const SecurityKey = global.Fca.Require.Security.create().apiKey;
          process.env['FBKEY'] = SecurityKey;
          Database().set('FBKEY', SecurityKey);
        }
          break;
        default: {
          const SecurityKey = global.Fca.Require.Security.create().apiKey;
          process.env['FBKEY'] = SecurityKey;
          Database().set('FBKEY', SecurityKey);
        }
      }
      try {
        switch (global.Fca.Require.FastConfig.EncryptFeature) {
          case true: {
            appState = JSON.parse(JSON.stringify(appState, null, "\t"));
            switch (utils.getType(appState)) {
              case "Array": {
                switch (utils.getType(appState[0])) {
                  case "Object": {
                    logger.Normal(Language.NotReadyToDecrypt);
                  }
                    break;
                  case "String": {
                    appState = Security(appState, process.env['FBKEY'], 'Decrypt');
                    logger.Normal(Language.DecryptSuccess);
                  }
                    break;
                  default: {
                    logger.Warning(Language.InvaildAppState);
                    process.exit(0)
                  }
                }
              }
                break;
              default: {
                logger.Warning(Language.InvaildAppState);
                process.exit(0)
              }
            }
          }
            break;
          case false: {
            switch (utils.getType(appState)) {
              case "Array": {
                switch (utils.getType(appState[0])) {
                  case "Object": {
                    logger.Normal(Language.EncryptStateOff);
                  }
                    break;
                  case "String": {
                    appState = Security(appState, process.env['FBKEY'], 'Decrypt');
                    logger.Normal(Language.EncryptStateOff);
                    logger.Normal(Language.DecryptSuccess);
                  }
                    break;
                  default: {
                    logger.Warning(Language.InvaildAppState);
                    process.exit(0)
                  }
                }
              }
                break;
              default: {
                logger.Warning(Language.InvaildAppState);
                process.exit(0)
              }
            }
          }
            break;
          default: {
            logger.Warning(getText(Language.IsNotABoolean, global.Fca.Require.FastConfig.EncryptFeature))
            process.exit(0);
          }
        }
      }
      catch (e) {
        console.log(e);
      }

      try {
        appState = JSON.parse(appState);
      }
      catch (e) {
        try {
          appState = appState;
        }
        catch (e) {
          return logger.Error();
        }
      }
      try {
        global.Fca.Data.AppState = appState;
        appState.map(function(/** @type {{ key: string; value: string; expires: string; domain: string; path: string; }} */c) {
          var str = c.key + "=" + c.value + "; expires=" + c.expires + "; domain=" + c.domain + "; path=" + c.path + ";";
          jar.setCookie(str, "http://" + c.domain);
        });
        Database().set('Backup', appState);
        mainPromise = utils.get('https://www.facebook.com/', jar, null, globalOptions, { noRef: true }).then(utils.saveCookies(jar));
      }
      catch (e) {
        try {
          if (Database().has('Backup')) {
            return backup(Database().get('Backup'), globalOptions, callback, prCallback);
          }
          else {
            logger.Warning(Language.ErrBackup);
            process.exit(0);
          }
        }
        catch (e) {
          logger.Warning(Language.ErrBackup);
          process.exit(0);
        }
      }
    }

    else {
      mainPromise = utils
        .get("https://www.facebook.com/", null, null, globalOptions, { noRef: true })
        .then(utils.saveCookies(jar))
        .then(makeLogin(jar, email, password, globalOptions, callback, prCallback))
        .then(function() {
          return utils.get('https://www.facebook.com/', jar, null, globalOptions).then(utils.saveCookies(jar));
        });
    }
  } catch (e) {
    console.log(e);
  }


  var ctx, api;
  mainPromise = mainPromise
    .then(function(res) {
      var reg = /<meta http-equiv="refresh" content="0;url=([^"]+)[^>]+>/, redirect = reg.exec(res.body);
      if (redirect && redirect[1]) return utils.get(redirect[1], jar, null, globalOptions).then(utils.saveCookies(jar));
      return res;
    })
    .then(function(res) {
      var html = res.body, Obj = buildAPI(globalOptions, html, jar);
      ctx = Obj.ctx;
      api = Obj.api;
      process.env.api = Obj.api;
      return res;
    });
  if (globalOptions.pageID) {
    mainPromise = mainPromise
      .then(function() {
        return utils.get('https://www.facebook.com/' + ctx.globalOptions.pageID + '/messages/?section=messages&subsection=inbox', ctx.jar, null, globalOptions);
      })
      .then(function(resData) {
        var url = utils.getFrom(resData.body, 'window.location.replace("https:\\/\\/www.facebook.com\\', '");').split('\\').join('');
        url = url.substring(0, url.length - 1);
        return utils.get('https://www.facebook.com' + url, ctx.jar, null, globalOptions);
      });
  }
  mainPromise
    .then(async () => {
      logger.Normal(getText(Language.LocalVersion, global.Fca.Version));
      logger.Normal(getText(Language.CountTime, global.Fca.Data.CountTime()))
      logger.Normal(Language.WishMessage[Math.floor(Math.random() * Language.WishMessage.length)]);
      require('./Extra/ExtraUptimeRobot')();
      callback(null, api);
    }).catch(function(/** @type {{ error: any; }} */e) {
      log.error("login", e.error || e);
      callback(e);
    });
}

/**
 * It asks the user for their account and password, and then saves it to the database.
 */

function setUserNameAndPassWord() {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.clear();
  console.log(figlet.textSync('Pmd', { font: 'ANSI Shadow', horizontalLayout: 'default', verticalLayout: 'default', width: 0, whitespaceBreak: true }));
  console.log(chalk.bold.hex('#00FFFF')("[</>]") + chalk.bold.yellow(' => ') + "Operating System: " + chalk.bold.red(os.type()));
  console.log(chalk.bold.hex('#00FFFF')("[</>]") + chalk.bold.yellow(' => ') + "Machine Version: " + chalk.bold.red(os.version()));
  console.log(chalk.bold.hex('#00FFFF')("[</>]") + chalk.bold.yellow(' => ') + "Fca Version: " + chalk.bold.red(global.Fca.Version) + '\n');
  try {
    rl.question(Language.TypeAccount, (Account) => {
      if (!Account.includes("@") && global.Fca.Require.utils.getType(parseInt(Account)) != "Number") return logger.Normal(Language.TypeAccountError, function() { process.exit(1) }); //Very Human
      else rl.question(Language.TypePassword, function(Password) {
        rl.close();
        try {
          Database().set("Account", Account);
          Database().set("Password", Password);
        }
        catch (e) {
          logger.Warning(Language.ErrDataBase);
          logger.Error();
          process.exit(0);
        }
        if (global.Fca.Require.FastConfig.ResetDataLogin) {
          global.Fca.Require.FastConfig.ResetDataLogin = false;
          global.Fca.Require.fs.writeFileSync(process.cwd() + '/ConfigFca.json', JSON.stringify(global.Fca.Require.FastConfig, null, 4));
        }
        logger.Success(Language.SuccessSetData);
        process.exit(1);
      });
    })
  }
  catch (e) {
    logger.Error(e)
  }
}

/**
 * @param {{ email: any; password: any; appState: any; }} loginData
 * @param {{}} options
 * @param {(error: any, api: any) => any} callback
 */

function login(loginData, options, callback) {
  if (utils.getType(options) === 'Function' || utils.getType(options) === 'AsyncFunction') {
    callback = options;
    options = {};
  }

  var globalOptions = {
    selfListen: false,
    listenEvents: true,
    listenTyping: false,
    updatePresence: false,
    forceLogin: false,
    autoMarkDelivery: false,
    autoMarkRead: false,
    autoReconnect: true,
    logRecordSize: 100,
    online: false,
    emitReady: false,
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8"
  };

  var prCallback = null;
  if (utils.getType(callback) !== "Function" && utils.getType(callback) !== "AsyncFunction") {
    var rejectFunc = null;
    var resolveFunc = null;
    var returnPromise = new Promise(function(resolve, reject) {
      resolveFunc = resolve;
      rejectFunc = reject;
    });
    prCallback = function(error, api) {
      if (error) return rejectFunc(error);
      return resolveFunc(api);
    };
    callback = prCallback;
  }

  if (loginData.email && loginData.password) {
    setOptions(globalOptions, {
      logLevel: "silent",
      forceLogin: true,
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36"
    });
    loginHelper(loginData.appState, loginData.email, loginData.password, globalOptions, callback, prCallback);
  }
  else if (loginData.appState) {
    setOptions(globalOptions, options);
    let All = (getAll()).filter(i => i.data.messageCount !== undefined);
    if (All.length >= 1) {
      deleteAll(All.map(obj => obj.data.threadID));
    }

    switch (global.Fca.Require.FastConfig.AutoLogin) {
      case true: {
        if (global.Fca.Require.FastConfig.ResetDataLogin) return setUserNameAndPassWord();
        else {
          try {
            const TempState = Database().get("TempState")
            if (TempState) {
              try {
                loginData.appState = JSON.parse(TempState);
              }
              catch (_) {
                loginData.appState = TempState;
              }
              Database().delete("TempState");
            }
          }
          catch (e) {
            console.log(e)
            Database().delete("TempState");
            logger.Warning(Language.ErrDataBase);
            logger.Error();
            process.exit(0);
          }
          try {
            if (Database().has('Account') && Database().has('Password')) return loginHelper(loginData.appState, loginData.email, loginData.password, globalOptions, callback, prCallback);
            else return setUserNameAndPassWord();
          }
          catch (e) {
            console.log(e)
            logger.Warning(Language.ErrDataBase);
            logger.Error();
            process.exit(0);
          }
        }
      }
      case false: {
        return loginHelper(loginData.appState, loginData.email, loginData.password, globalOptions, callback, prCallback);
      }
    }
  }
  return returnPromise;
}

module.exports = login;
