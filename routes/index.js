var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/blogs', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});

router.get('/check', async function(req, res, next) {
  await userModel.create({ name: 'Jean-Luc Picard' });
});

module.exports = router;
