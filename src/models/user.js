const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    skills: [String],
    role: String
});

module.exports = mongoose.model('User', UserSchema);