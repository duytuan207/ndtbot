module.exports.config = {
  name: "destroy",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ngduytuan",
  description: "out box",
  commandCategory: "Admin",
  usages: "destroy [tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    const tid = args.join(" ")
   let namee = await api.getThreadInfo(tid)
  if (!tid) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);

else return api.removeUserFromGroup(api.getCurrentUserID(), tid, () => api.sendMessage("💦Bot đã rời nhóm này", event.threadID, event.messageID));
  
    }