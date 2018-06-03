let io;

module.exports = function(instance) {
    if (io) {
        return io;
    } else {
        if (instance) {
            io = instance;
        } else {
            throw 'Io instance is required';
        }
    }
};