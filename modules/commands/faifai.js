const fs = require("fs");
module.exports.config = {
	name: "faifai",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "chất",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Faifai")==0 || (event.body.indexOf("faifai")==0)) {
		var msg = {
				body: "fai fai là phải đập đập giật giật!",
				attachment: fs.createReadStream(__dirname + `/noprefix/faifai.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}