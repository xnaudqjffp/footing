/**rest api
 *
 * login, signup, logout...etc...
 *
 * 모든 디비관련 제어는 api를 통해서 진행한다.
 */

var express = require('express');
var router = express.Router();
var login = require('../service/service_login');
var signup = require('../service/service_signup');

//var bcrypt = require('bcrypt');


router.post('/login', function(req, res, next){
  var
    user_id = req.body.user_id,
    password = req.body.password;

  console.log(user_id);
  console.log(password);

  login.login(req, res, user_id, password);
});

// post 형식으로 signup확인
router.post('/signup', function(req, res, next){
  var
      user_id = req.body.user_id,
      password = req.body.password;

  console.log(user_id);
  console.log(password);

  signup.signup(req, res, user_id, password);

});


router.get('/testget', function (req, res, next){
  console.log('get router ... start');

  console.log(req.query);

  var value_01 = req.query.value01;
  var value_02 = req.query.value02;

  console.log(value_01);
  console.log(value_02);

  res.json({
    'success': true,
    'status' : 200
  })

});


router.post('/testpost', function(req, res, next){

  if(req.body.value01 === null || req.body.value01 === undefined){
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




module.exports = router;