const router = require('express').Router();
const User = require('../models/user');

router.use(function(req, res, next) {
    next();
});

router.post('/signup', function(req, res) {
   const user = new User(req.body);
   user.save().then(result => {
    res.json({status: 'user saved'});
   }, error => {
    res.json({status: 'error'});
   });
});

router.post('/login', function(req, res) {
    const { username, password } = req.body;
    User.findOne({username: username}).then(user => {
        if (user && user.password === password) {
            res.json({status: 'success'});
        } else {
            res.json({status: 'not found'})
        }
    }, error => {
        res.json({status: 'error'})
    });
});



module.exports = router;