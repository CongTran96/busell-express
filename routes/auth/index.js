var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());

router.get('/', function(req, res) {
    res.status(200).send("Welcome back :'v");
})

module.exports = router;