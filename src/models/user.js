const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    skills: [String],
    role: String,
    tasks: [
        {
            title: String,
            description: String,
            tags: [String],
            comments: [String],
            hand: Boolean,
            categorized: Boolean
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);