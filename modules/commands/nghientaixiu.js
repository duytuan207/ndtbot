const fs = require("fs");
module.exports.config = {
	name: "nghientaixiu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "nghiện",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Tài xỉu")==0 || (event.body.indexOf("tài xỉu")==0)) {
		var msg = {
				body: "Điện thoại mà cầm ngang đời còn khổ nhiều :(",
				attachment: fs.createReadStream(__dirname + `/noprefix/taixiu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}