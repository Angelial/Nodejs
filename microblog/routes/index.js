var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); //调用模板解析引擎，翻译名为 index 的模板，并传入一个对象作为参数
});
module.exports = router;
