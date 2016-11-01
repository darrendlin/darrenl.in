var express = require('express');
var router = express.Router();

var education = require('../education/education');
var ilevelcalc = require('../tera/ilevelcalc/ilevelcalc');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/education', function(req, res, next) {
  res.render('education', { 
    title: 'Education', 
    schools: education.history 
  });
});

router.get('/tera/ilevelcalc', function(req, res, next) {
  res.render('ilevelcalc', {
    title: 'TERA - Item Level Calculator',
    items: ilevelcalc.items, 
    calc: ilevelcalc.calc
  });
});

module.exports = router;
