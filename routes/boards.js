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


  connection.query(stmt_board_list, function (err, board_list){
    if(err){
      console.log(err)
    }else{
      res.render('boards',{
        title: 'board ...',
        board_list: board_list
      })
    }
  })
})

router.get('/view/:id', function(req, res, next){
  var id = req.params.id ;
  var stmt_board_id = 'select * from footing.`board` where id =?;';
  connection.query(stmt_board_id,id, function(err,board_id){
    if(err){
     console.log(err)
    }else{
      console.log(board_id)
      res.render('view',{
        title : 'view page',
        board_id : board_id
      })
    }
  })
});
module.exports = router;