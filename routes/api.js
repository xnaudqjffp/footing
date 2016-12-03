/**rest api
 *
 * login, signup, logout...etc...
 *
 * 모든 디비관련 제어는 api를 통해서 진행한다.
 */

var express = require('express');
var router = express.Router();
var mysql_dbc = require('../common/db_con')();
var connection = mysql_dbc.init();

var login = require('../service/service_login');
var signup = require('../service/service_signup');

//var bcrypt = require('bcrypt');
router.post('/login', function (req, res, next) {
  var
    user_id = req.body.user_id,
    password = req.body.password;

  if (user_id === undefined || user_id == null || password === undefined || password == null) {
    console.log('no date')
  }
  console.log(user_id);
  console.log(password);

  var stmt_login = 'select *from footing.`user`  where `user_id` = ?;';

  connection.query(stmt_login, user_id, function (err, result) {
    if (err) {
      res.json({
        'success': false,
        'msg': 'DB INTERNAL_ERROR'
      });
    } else {
      if (result.length === 0) {
        res.json({
          'success': false,
          'msg': '등록된 계정이 없습니다.'
        })
      } else {
        if (result[0].password !== password) {
          res.json({
            'success': false,
            'msg': '패스워드가 일치하지 않습니다.'
          });
        } else {

          res.json({
            'success': true,
            'msg': '로그인에 성공했습니다.'
          });
        }
      }
    }
  });

  //login.login(req, res, user_id, password);
});

// post 형식으로 signup확인
router.post('/signup', function (req, res, next) {
  var
    user_id = req.body.username,
    password = req.body.password;


  console.log(user_id);
  console.log(password);

  signup.signup(req, res, user_id, password);

});


router.get('/testget', function (req, res, next) {
  console.log(req.user);
  console.log('get router ... start');

  console.log(req.query);

  var value_01 = req.query.value01;
  var value_02 = req.query.value02;

  console.log(value_01);
  console.log(value_02);

  res.json({
    'success': true,
    'status': 200
  })

});


router.post('/testpost', function (req, res, next) {

  if (req.body.value01 === null || req.body.value01 === undefined) {
    console.log('no data')
    return;
  }


  var value_01 = req.body.value01;
  var value_02 = req.body.value02;

  console.log(req.body);

  console.log(value_01);
  console.log(value_02);

  res.json({
    'success': true,
    'status': 'tprtm'
  })
});


router.get('/remove/board', function (req, res, next) {
  var id = req.query.id;

  var stmt_rempove_board = 'delete from footing.`board` where `id` = "' + id + '"';

  connection.query(stmt_rempove_board, function (err, result) {
    if (err) {
      console.log('err! :' + err)
    } else {
      res.redirect('/boards');
    }
  });
});


/*signup result*/
router.post('/signup/result', function (req, res, next) {
  console.log('asd');

  var _signupInfo = {
    user_id: req.body.user_id,
    nickname: req.body.nickname,
    password: req.body.password
  }

  console.log(_signupInfo)

});

/*signup result*/


module.exports = router;