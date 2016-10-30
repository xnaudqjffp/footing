/**
 * service model
 * login, logout, loginFail, loginLog, loginFailCntReset, etc...
 * */


 var mysql_dbc = require('../common/db_con')();
var connection = mysql_dbc.init();
//mysql_dbc.test_open(connection);
//var bcrypt = require('bcrypt');

var  login ={};

var RESULT =[] ;

RESULT[0] = 'INTERNAL_ERROR'; /*디비 오류*/
RESULT[1] = 'NO_ACCOUNT'; /*등록된 계정이 없는 경우*/
RESULT[2] = 'PASSWORD_NOT_MATCHED';/*패스워드가 일치하지 않을 경우*/
RESULT[3] = 'LOGIN_SUCCESS';/*로그인 성공*/


login.login = function (req, res, user_id, passwrod){
  var stmt_login = 'login query.....';

  //connection.query(stmt_login, user_id, function(err, result){
    if(user_id === 'a'){
      res.json({
        'success': false,
        'msg' : 'DB INTERNAL_ERROR'
      })
    }else{
      //if(result.length === 0){
      if(user_id === 'b'){
        res.json({
          'success': false,
          'msg': '등록된 계정이 없습니다.'
        })
      }else{
        //if(!bcrypt.compareSync(passwrod, result[0].password)){
        if(user_id === 'c'){
          res.json({
            'success': false,
            'msg': '패스워드가 일치하지 않습니다.'
          });
        }else{
          res.json({
            'success': true,
            'msg': '로그인에 성공했습니다.'
          });
        }
      }
    }
  //})
};
module.exports = login;