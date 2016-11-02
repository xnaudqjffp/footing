/**
* 디비 쿼리 조회
 *
 * CRUD
* */


/*입력 Create*/
//insert into `user` set `user_id` = 'player002', `nicname` = '바보';

/*조회 Read*/
//select *form `user` where `user_id` = 'player001';

/*수정 Update*/
//update `user` set `nicname` = '바보' where `player001`;


/*삭제 Delete*/
//delete from `user` where `user_id` = `player001`


connection.query('SELECT * FROM users WHERE id = ?', [userId], function(err, results) {
  // ...
});


connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function(err, results) {
  // ...
});


var userId = 1;
var columns = ['username', 'email'];
var query = connection.query('SELECT ?? FROM ?? WHERE id = ?', [columns, 'users', userId], function(err, results) {
  // ...
});