var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({Message: "Welcome to API !"});
});

module.exports = router;
