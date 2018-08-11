const express = require('express');
const { version } = require('../../../package.json');
const { REVISION_HASH } = require('../../../config');
const router = express.Router();

// Return the current version.
router.get('/', (req, res) => {
  res.send({ version, revision: REVISION_HASH });
});

router.use('/auth', require('./auth'));
router.use('/users', require('./users'));

module.exports = router;