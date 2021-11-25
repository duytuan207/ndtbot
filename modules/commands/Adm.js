/** Mod lại module "bot.js" nếu muốn nó hiển thị ảnh **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HChong",
	description: "Thông tin người điều hành bot",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Thông tin người điều hành bot:
Facebook: Nguyễn Duy Tuấn ( Tít )
TikTok: @ndteditor
UID: tự tìm chứ t éo rảnh :))
Giới tính: Nam ( Đôi khi tao còn nghi ngờ về giới tính của mình 🐸)
Mối quan hệ: Độc thân
Link Facebook: facebook.com/ngduytuanhmm/`, event.threadID, event.messageID);