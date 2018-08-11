var express = require('express');
var router = express.Router();
var usersData = require('../utils/sampleData');
var User = require('../models/User');

var userHashPassword = usersData.map(user => {
    var hashedPassword = User.setPassword(user.password);
    user.password = hashedPassword;
    return user;
});

/* Import users. */
router.get('/', function(req, res, next) {
  User.insertMany(userHashPassword, (err, users) => {
    res.status(200).send(users);
  });
});

module.exports = router;