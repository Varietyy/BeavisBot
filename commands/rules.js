exports.names = ['.rules'];
exports.hidden = false;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function (data) {
    bot.chat(config.responses.rules);
};