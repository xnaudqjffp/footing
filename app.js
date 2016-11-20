var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var session = require('express-session');



var routes = require('./routes/index');
var users = require('./routes/users');
var mpdata = require('./routes/map');
var boards = require('./routes/boards');
var api = require('./routes/api');

/*passport 이용한 login*/
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash'); // session 관련해서 사용됨. 로그인 실패시 session등 클리어하는 기능으로 보임.
/*passport 이용한 login*/

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(cookieSession({
  keys: ['footing'] // TODO 나중에 수정할 것 세션 저장 기간은? 기타등등.
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


/*router*/
app.use('/', routes);
app.use('/users', users);
app.use('/map',mpdata);
app.use('/api/v1', api);
app.use('/boards', boards);
/*router*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
