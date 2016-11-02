var express = require('express');
var router = express.Router();

var mysql_dbc = require('../common/db_con')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

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


/*login view page*/
router.get('/login', function (req, res, next){
  res.render('login',{
    title: 'Footing Login',
    part: 'login'
  })
});
/*login view page*/
module.exports = router;
