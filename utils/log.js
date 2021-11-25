const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Ối giồi ôi mày làm ăn như thế hả =)) ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Ối giồi ôi mày làm ăn như thế hả =)) ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Nguyễn Duy Tuấn ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Nguyễn Duy Tuấn ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ Nguyễn Duy Tuấn ] » `) + data);
			break;
	}
}