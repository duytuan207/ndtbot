const fs = require("fs");
module.exports.config = {
	name: "chucmunggiangsinhv2",
    version: "1.0.9",
	hasPermssion: 0,
	credits: "ndteditor", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "happy giang sinh =)",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Giáng sinh")==0 || (event.body.indexOf("giáng sinh")==0)) {
		var msg = {
				body: "Chúc Mừng Giáng Sinh Tất Cả Người Anh Em Thiện Lành =))",
				attachment: fs.createReadStream(__dirname + `/noprefix/giangsinh.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}