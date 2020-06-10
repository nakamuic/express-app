var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    let opt = {
        title: 'Hello!',
        message: 'input form:'
    }
    //レンダリングするテンプレート名(form)とオプション情報のオブジェクトを指定
    res.render('form', opt);
});

router.post('/', function (req, res, next) {
    let name = req.body.f1;
    let pass = req.body.f2;
    let msg = 'name: ' + name + '<br>password: ' + pass;
    let opt = {
        title: 'Hello!',
        message: msg
    }
    //レンダリングするテンプレート名(form)とオプション情報のオブジェクトを指定
    res.render('form', opt);
});

module.exports = router;
