const fs = require("fs");
module.exports.config = {
	name: "stk",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "stk",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("stk")==0 || (event.body.indexOf("Stk")==0)) {
		var msg = {
				body: "Tao éo có số tài khoản nhưng muốn thì quyên góp cho tao thẻ cào qua facebook.com/ngduytuanhmm cũng đựt đó :33",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}