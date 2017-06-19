const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  res.json(req.body);
  //res.redirect('/');
});
// router.post('/wiki', function(req, res, next){
//
// });
router.get('/add', function(req, res, next) {
  res.render('addpage');
});


module.exports = router;
