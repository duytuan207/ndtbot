const fs = require("fs");
module.exports.config = {
	name: "meo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Xinh wa",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mèo")==0 || (event.body.indexOf("Mèo")==0)) {
		var msg = {
				body: "Cute nhỉ :333",
				attachment: fs.createReadStream(__dirname + `/noprefix/meo.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}