const fs = require("fs");
module.exports.config = {
	name: "yeuem2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "aye",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Aye")==0 || (event.body.indexOf("aye")==0)) {
		var msg = {
				body: "anh cũm iu em :33!",
				attachment: fs.createReadStream(__dirname + `/noprefix/yeuem.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}