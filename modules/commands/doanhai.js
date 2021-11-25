module.exports.config = {
name: "doanhai",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "ndteditor",
	description: "đồ ngu đồ ăn hại",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu")==0 || (event.body.indexOf("Đồ ngu")==0)) {
				body: "mày ngu vãi cả lồn, cút mẹ mày đi =))",
				attachment: fs.createReadStream(__dirname + `/noprefix/đồ ngu.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}