/**
 * Created by sanghyun on 2016-10-27.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
//hbs 추가로 생성해서 맺어야됨
router.get('/', function(req, res, next) {
    res.render('map', {          //map.hbs 선언
        title: 'footing',
        footing: 'Firs'
    });
});

module.exports = router;
