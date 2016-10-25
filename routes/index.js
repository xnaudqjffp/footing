var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {          //index.hbs ����
    title: 'footing',
    footing: 'Firs'
  });
});

router.get('/test', function(req, res, next) {
  res.render('test', {          //index.hbs ����
    data: 'footing'  });
});


module.exports = router;
