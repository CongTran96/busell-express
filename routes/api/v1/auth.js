const express = require('express');
const router = express.Router();
const config = require('../../../config');
const { User } = require('../../../models');
var jwt = require('jsonwebtoken');
var authentication = require('../../../middleware/authentication');

/**
 * This returns the user if they are logged in.
 */
router.get('/', authentication.verifyToken, (req, res, next) => {
    // find user in database
    User.findById(req.userId, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        res.status(200).send(user);
    });
});


/**
 * generator jwt
 */
router.post('/login', function (req, res) {
    User.findOne({ email: req.body.email }).select('+password').exec(function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordIsValid = user.validPassword(req.body.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        
        var token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
            expiresIn: config.JWT_EXP
        });

        res.status(200).send({ auth: true, token: token });
    });
});

module.exports = router;