/**
 * Created by sanghyun on 2016-10-27.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
//hbs �߰��� �����ؼ� �ξ�ߵ�
router.get('/', function(req, res, next) {
    res.render('map', {          //map.hbs ����
        title: 'footing',
        footing: 'Firs'
    });
});

module.exports = router;
