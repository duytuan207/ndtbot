const fs = require("fs");
module.exports.config = {
	name: "cainhau",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "cút",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cãi nhau")==0 || (event.body.indexOf("Cãi nhau")==0)) {
		var msg = {
				body: "cút hết về nhà cãi nhau đi đau đầu quá aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccdddddddddddddddddd",
				attachment: fs.createReadStream(__dirname + `/noprefix/về nhà.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}