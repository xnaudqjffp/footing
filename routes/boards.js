var express = require('express');
var router = express.Router();
var mysql_dbc = require('../common/db_con')();
var connection = mysql_dbc.init();

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
};

router.get('/', function(req, res, next){

  var stmt_board_list = 'select *from footing.`board`;';

  var test = null;

  connection.query(stmt_board_list, function (err, board_list){
    if(err){
      console.log(err)
    }else{
      console.log(result)
      res.render('boards',{
        title: 'board ...',
        board_list: board_list
      })
    }
  })



})

module.exports = router;