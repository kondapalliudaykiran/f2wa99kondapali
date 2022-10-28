var express = require('express');
var router = express.Router();

/* GET home page. */
var x=Math.random();
router.get('/', function(req, res, next) {
  res.render('computation', { title: 'uday kiran kondapalli',
  line1: 'Math.abs() applied to '+x+' is '+Math.abs(x),
  line2: 'Math.sin() applied to '+x+' is '+Math.sin(x),
  line3: 'Math.acos() applied to '+x+' is '+Math.acos(x),
  line4: 'Math.sinh() applied to '+x+' is '+Math.sinh(x),
});
});

module.exports = router;
