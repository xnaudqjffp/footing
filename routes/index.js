var express = require('express');
var router = express.Router();
var session = require('express-session');
var mysql_dbc = require('../common/db_con')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');


/**
 * passport를 통한 로그인 로직
 * */

/*로그인 성공시 사용자 정보를 Session에 저장한다*/
passport.serializeUser(function (user, done) {
  console.log('serialize');
  console.log(user);
  done(null, user);
});

/*인증 후, 페이지 접근시 마다 사용자 정보를 Session에서 읽어옴.*/
passport.deserializeUser(function (user, done) {
  console.log('deserialize');
  console.log(user);
  done(null, user);
});

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
};

passport.use(new LocalStrategy({
    usernameField: 'user_id',
    passwordField: 'password',
    passReqToCallback: true //인증을 수행하는 인증 함수로 HTTP request를 그대로  전달할지 여부를 결정한다
  }, function (req, user_id, password, done) {
    var stmt_login = 'select *from footing.`user`  where `user_id` = ?;';
    connection.query(stmt_login, [user_id], function (err, result) {
      if (err) {
        return done(null, false);
      } else {
        if (result.length === 1) {
          if (result[0].password === password) {
            /*디비 유저, password가 일치할경우 serializeUser()로 넘겨  Session에 저장시킨다*/
            console.log('password is matched.');
            return done(null, {
              'user_id': result[0].user_id,
              'nickname': result[0].nickname
            });
          }
        } else {
          return done(null, false);
        }
      }
    })
  }
));

/**
 * 로그인*/
router.post('/login', passport.authenticate('local', {failureRedirect: '/', failureFlash: true}), // 인증실패시 401 리턴, {} -> 인증 스트레티지
  function (req, res) {
    res.redirect('/');
  });

/**
 *  로그아웃*/
router.get('/logout', function (req, res) {
  req.logout();
  req.redirect('/')
  /*로그아웃시에 어디로 리다이렉트 시킬것인가?*/
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {          //index.hbs ����
    title: 'footing',
    footing: 'Firs'
  });
});

router.get('/test', function (req, res, next) {
  res.render('test', {          //index.hbs ����
    data: 'footing'
  });
});


/*login view page*/
router.get('/login', function (req, res, next) {
  console.log(req.user);

  if(req.user === undefined){
    res.render('login', {
      title: 'Footing Login',
      part: 'login'
    })
  }else{
    res.redirect('/');
  }

});
/*login view page*/


/*test*/
router.get('/formtest', function (req, res, next) {
  res.render('formtest', {
    title: 'formtest',
    part: 'formtest'
  })
});
/*test*/
router.get('/formtest/:id', function (req, res, next) {
  var id = req.params.id;
  console.log(id);

  res.json({
    'success': id
  })

});


module.exports = router;
