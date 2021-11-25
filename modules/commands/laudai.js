const fs = require("fs");
module.exports.config = {
	name: "laudai",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "lofi lâu đài tình ái",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lâu đài")==0 || (event.body.indexOf("Lâu đài")==0)) {
		var msg = {
				body: "em ơi...",
				attachment: fs.createReadStream(__dirname + `/noprefix/lâu đài.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}