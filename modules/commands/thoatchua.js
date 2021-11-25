module.exports.config = {
    name: "thoatchua",
    version: "1.0.0",
    credits: "DungUwU (Ng Duy Tuấn Fix v3)",
    hasPermssion: 1,
    description: "Chống out chùa 😌",
    usages: "antiout on/off",
    commandCategory: "system",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
    else data["antiout"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅Đã ${(data["antiout"] == true) ? "Bật" : "Tắt"} thành công antiout!, còn nữa cơ, mày không thoát được đâu con trai😏😌 `, event.threadID);

}