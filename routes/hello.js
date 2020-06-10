var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    if (req.session.data == undefined) {
        req.session.data = [];
    }
    let opt = {
        title: 'Hello!',
        data: req.session.data
    }
    //レンダリングするテンプレート名(hello)とオプション情報のオブジェクトを指定
    res.render('hello', opt);
});

router.post('/', function (req, res, next) {
    req.session.data.unshift(req.body.msg);
    let opt = {
        title: 'Hello!',
        data: req.session.data
    }
    //レンダリングするテンプレート名(hello)とオプション情報のオブジェクトを指定
    res.render('hello', opt);
});
module.exports = router;
