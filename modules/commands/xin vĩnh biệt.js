const fs = require("fs");
module.exports.config = {
	name: "xin vĩnh biệt",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "fix by ngduytuan", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bye")==0 || (event.body.indexOf("Bye")==0)) {
		var msg = {
				body: "Ôi thôi bỏ mẹ xin vĩnh biệt cụ, hẹn gặp lại cụ trong trương trình lần sau",
				attachment: fs.createReadStream(__dirname + `/noprefix/xin vĩnh biệt.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}