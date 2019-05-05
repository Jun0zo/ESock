var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
  	{ title: 'Express' });
});


router.get('/cup.json', function(req, res, next) {
  res.render('A');
  console.log('index.js -> cup.json');
});

module.exports = router;
