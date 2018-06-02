const router = require('express').Router();
const User = require('../models/user');

router.use(function(req, res, next) {
    console.log('/user router called');
    next();
});

router.post('/signup', function(req, res) {
   const user = new User(req.body);
   user.save().then(result => {
    console.log(result);
    res.json({status: 'user saved'});
   }, error => {
    console.log(error);
    res.json({status: 'error'});
   });
});

module.exports = router;