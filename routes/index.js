var express = require('express');
var router = express.Router();

var education = require('../education/education')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/education', function(req, res, next) {
  res.render('education', { title: 'Education', schools: education.history });
});

module.exports = router;
