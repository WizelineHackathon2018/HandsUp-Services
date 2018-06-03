const config = require('config');
const TASK_CHANNEL = config.get('channels.taskChannel');

module.exports = function(io) {

    const taskChannel = io.of(`/${TASK_CHANNEL}`);
    taskChannel.on('connection', function(socket) {
        socket.emit(TASK_CHANNEL, []);
    });

    function sendMessage(message) {
        taskChannel.emit(TASK_CHANNEL, message);
    }

    return {
        sendMessage
    };
};