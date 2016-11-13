var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/api', function (req, res, next) {
    res.json({Message: "Welcome to API !"});
});

module.exports = router;
