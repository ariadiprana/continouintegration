var express = require('express');
var router = express.Router();
var Content = require('../models/content')
const contentController = require('../controllers/content')
/* GET home page. */
router.get('/', function(req, res, next) {
  Content.find(function(err,result){
    res.render('index',{result:result});
  })
});

/*
================== Cards API ==================
*/
router.post('/content', contentController.insert)
router.get('/content', contentController.display)
router.put('/content/:id', contentController.update)
router.delete('/content/:id', contentController.hapus)
router.get('/content/:id', contentController.detail)



module.exports = router;
