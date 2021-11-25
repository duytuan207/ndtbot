const fs = require("fs");
module.exports.config = {
	name: "cac",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "com cac",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cặc")==0 || (event.body.indexOf("Cặc")==0)) {
		var msg = {
				body: "có cái con cặc, con cặc con muahaha",
				attachment: fs.createReadStream(__dirname + `/noprefix/cac.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}