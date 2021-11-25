module.exports.config = {
name: "anhbana",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor",
	description: "cho giảng hòa i",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("giảng hòa")==0 || (event.body.indexOf("Anh bạn à")==0)) {
		var msg = {
				body: "bạn à tôi nungws lắm rồi có thể nào cho tôi giảng hòa được không =))",
				attachment: fs.createReadStream(__dirname + `/noprefix/anh bạn à.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}