module.exports.config = {
name: "tuoitre",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor",
	description: "tuổi trẻ nông nổi.. :(",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("tuổi trẻ")==0 || (event.body.indexOf("Tuổi trẻ")==0)) {
		var msg = {
				body: "Lũ trẻ ngày nay ghê lắm :(",
				attachment: fs.createReadStream(__dirname + `/noprefix/tuoitre.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}