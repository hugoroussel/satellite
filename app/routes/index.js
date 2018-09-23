var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.redirect( '/user/index.html');
});

router.get('/get-pii', function (req, res, next) {
  let encrypted = req.app.piis.find({ 'hash': req.query.hash });
  return res.send(encrypted[0].encrypted);
});

router.post('/post-pii', function (req, res) {
  req.app.piis.insert({ hash: req.body.hash, encrypted: req.body.encrypted });
  return res.send('ok');
});

module.exports = router;