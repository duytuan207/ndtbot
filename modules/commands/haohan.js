const fs = require("fs");
module.exports.config = {
	name: "haohan",
    version: "1.0.1111111111",
	hasPermssion: 0,
	credits: "ndteditor", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "hảo cái lồn",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hảo")==0 || (event.body.indexOf("Hảo hán")==0)) {
		var msg = {
				body: "chúng mình yêu nhau đeeeeeee",
				attachment: fs.createReadStream(__dirname + `/noprefix/hao.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}