var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//==============================================================================
// PASSPORT MIDDLEWARE
//==============================================================================

// Attach the authentication middleware, this will be responsible for decoding
// (if present) the JWT on the request.cls
router.use('/api', require('./api'));

//==============================================================================
// STATIC ROUTES
//==============================================================================

router.use('/auth', require('./auth'));
router.use('/users', require('./users'));
router.use('/import-data', require('./importData'));

//==============================================================================
// ERROR HANDLING
//==============================================================================

router.use('/vampie', (req, res, next) => {
  res.render('error-vampie', { title: 'Wrong patch' });
});

// Catch 404 and forward to error handler.
router.use((req, res, next) => {
  next(new ErrNotFound());
});

router.use('/', (err, req, res, next) => {
  // res.render('error', {
  //   message: process.env.NODE_ENV === 'development' ? err : 'Sorry, This patch is wrong',
  //   error: process.env.NODE_ENV === 'development' ? err : {},
  // });
  res.render('error', { title: 'Wrong patch' });
});

module.exports = router;
