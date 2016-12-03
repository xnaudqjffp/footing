var express = require('express');
var router = express.Router();
var mysql_dbc = require('../common/db_con')();
var connection = mysql_dbc.init();

var fs = require('fs');


/*비동기 프로그래밍 안좋은 예*/
router.get('/', function (req, res, next){
  fs.readFile('./path', function(err, data){
    if(err){
      console.log(err)
    }else{
      var title = data.title;

      fs.readFile('./path', function(err, data){
        if(err){
          console.log(err)
        }else{
          var subTitle = data.subTitle;
          res.end()
        }
      })
    }
  })
});













/*비동기 프로그래밍 그나마 좋은 예*/
router.get('/', function (req, res, next){
  getTitle(res);
});


function getTitle(res){
//  work ...
  fs.readFile('/path..' ,function(err, data){
    if(err) return next(new Error(''));

    getSubTitle(data.title, res)
  })
}

function getSubTitle(title, res){
  fs.readFile('/path..' ,function(err, data){
    if(err) return next(new Error(''));

    getContent(title, data.subTitle, res)
  })
}

function getContent(title, subTitle, res){
  res.end()
}







module.exports = router;