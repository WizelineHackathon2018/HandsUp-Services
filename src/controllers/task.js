const router = require('express').Router();
const User = require('../models/user');
const taskChannel = require('../utils/task.channel')();
const handsChannel = require('../utils/handsup.channel')();

router.post('/', function(req, res) {
    const { username } = req.body;

    User.findOne({username: username}).then(user => {
        res.json({status: 'success', data: user.tasks});
    }, error => {
        res.json({status: 'error'});
    });
});

// add task
router.post('/add', function(req, res) {
    const { username, task } = req.body;

    User.findOneAndUpdate({
        username: username
    }, {
        $push: {tasks: task}
    }).then(result => {
        res.json({status: 'success'});
    }, error => {
        res.json({status: 'error'});
    });
});

// add a comment to a task
router.post('/comment', function(req, res) {
    const { _id, comment, username } = req.body;

    User.findOneAndUpdate({
        username: username,
        tasks: {$elemMatch: {_id: _id}}
    }, {
        $push: {'tasks.$.comments': comment}
    }).then(result => {
        res.json({status: 'success'});
    }, error => {
        res.json({status: 'error'});
    })
});

router.patch('/categorized', function(req, res) {
    const { username, _id } = req.body;

    User.findOneAndUpdate({
        username: username,
        tasks: {$elemMatch: {_id: _id}}
    }, {
        'tasks.$.categorized': true
    }).then(result => {
        const taskUpdated = result.tasks.find(task => task._id.toString() === _id);
        taskChannel.sendMessage(taskUpdated);

        res.json({status: 'success'});
    }, error => {
        console.log(error);
        res.json({status: 'error'});
    })
});

router.patch('/handsup', function(req, res) {
    const { username, _id, up } = req.body;

    User.findOneAndUpdate({
        username: username,
        tasks: {$elemMatch: {_id: _id}}
    }, {
        'tasks.$.hand': up
    }).then(result => {
        const taskUpdated = result.tasks.find(task => task._id.toString() === _id);
        handsChannel.sendMessage(taskUpdated);

        res.json({status: 'success'});
    }, error => {
        res.json({status: 'error'});
    });
});

module.exports = router;