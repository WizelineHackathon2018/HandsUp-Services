const config = require('config');
const HANDSUP_CHANNEL = config.get('channels.handsupChannel');

module.exports = function(io) {

    const handsupChannel = io.of(`/${HANDSUP_CHANNEL}`);
    handsupChannel.on('connection', function(socket) {
        socket.emit(HANDSUP_CHANNEL, []);
    });

    function sendMessage(message) {
        handsupChannel.emit(HANDSUP_CHANNEL, message);
    }

    return {
        sendMessage
    };
};