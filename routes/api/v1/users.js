const express = require('express');
const router = express.Router();
var authentication = require('../../../middleware/authentication');
const config = require('../../../config');
var jwt = require('jsonwebtoken');
const { User } = require('../../../models');

// return all users 
router.get('/', authentication.verifyToken, function (req, res, next) {
    // find all users in database
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!users) return res.status(404).send("No user found.");

        res.status(200).send(users);
    });
});

router.post('/register', function (req, res) {

    var hashedPassword = User.setPassword(req.body.password);

    User.create({
        fullName: req.body.fullname,
        username: req.body.name,
        email: req.body.email,
        password: hashedPassword
    },
        function (err, user) {
            if (err) return res.status(500).send({error: err.message})
            // create a token
            var token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
                expiresIn: config.JWT_EXP
            });
            res.status(200).send({ auth: true, token: token });
        });
});

module.exports = router;