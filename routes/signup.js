var express = require('express');
var router = express.Router();
var mysql_dbc = require('../common/db_con')();
var connection = mysql_dbc.init();


router.get('/', function(req, res, next){
  //res.end('signup');

  console.log('asd');
  res.render('signup',{
    title: 'signup ..'
  })

});

module.exports = router;