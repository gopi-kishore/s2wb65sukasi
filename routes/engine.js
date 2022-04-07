var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('engine', {title: 'Search results for engine'});
});

module.exports = router;
