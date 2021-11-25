const fs = require("fs");
module.exports.config = {
	name: "faifai2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "ngầu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fai five")==0 || (event.body.indexOf("Fai five")==0)) {
		var msg = {
				body: "fai fai là phải đập đập!",
				attachment: fs.createReadStream(__dirname + `/noprefix/faifai.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}