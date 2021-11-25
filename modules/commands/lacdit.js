const fs = require("fs");
module.exports.config = {
	name: "lacdit",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ndt", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "lắc đít lắc đít",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lắc đít")==0 || (event.body.indexOf("Lắc đít")==0)) {
		var msg = {
				body: "ô dê ô dê lắc đít đi lắc đít đi",
				attachment: fs.createReadStream(__dirname + `/noprefix/lắc đít.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}