let channel;

module.exports = function(instance) {
    if (channel) {
        return channel;
    } else {
        if (instance) {
            channel = instance;
        } else {
            throw 'Io channel is required';
        }
    }
};