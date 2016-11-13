/**
 * service model
 * login, logout, loginFail, loginLog, loginFailCntReset, etc...
 * */


var mysql_dbc = require('../common/db_con')();
var connection = mysql_dbc.init();
//var bcrypt = require('bcrypt');

var  signup ={};

var RESULT =[] ;

RESULT[0] = 'INTERNAL_ERROR'; /*디비 오류*/
RESULT[1] = 'NO_ACCOUNT'; /*등록된 계정이 없는 경우*/

signup.signup = function (req, res, user_id, password){
    var stmt_signup = 'select *from footing.`user`  where `user_id` = ?;';

    connection.query(stmt_signup,user_id, function(err,result){
        if(err){
            res.json({
                'success': false,
                'msg' : 'DB INTERNAL_ERROR'
            })
        }else{
            if(true == result.length){
                res.json({
                    'success' : false,
                    'msg' : '등록된 계정이 있습니다.'
                });
            }else{
                res.json({
                    'success' : true,
                    'msg' : '계정추가가 가능합니다.'
                });
            }
        }
    })
};
module.exports = signup;