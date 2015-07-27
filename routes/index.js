var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/event', function (req, res, next) {
    console.log(process);
    res.end('OK!\n');
});

module.exports = router;
