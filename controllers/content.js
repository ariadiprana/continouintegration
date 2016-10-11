/*
      judul:String,
      isi:String,
      hashtag:String
*/
var Contents = require('../models/content')

module.exports = {
  insert: insert,
  display: display,
  update:update,
  hapus:hapus,
  detail:detail
}

function insert(req,res,next){
    var items = new Contents({
      judul:req.body.judul,
      isi:req.body.isi,
      hashtag:req.body.hashtag
    })
    items.save()
    res.json(items)
}

function update(req,res,next){
  Contents.findOne({
    _id:req.params.id
  },(err,items) => {
      items.judul = req.body.judul
      items.isi = req.body.isi
      items.hashtag = req.body.hashtag

      items.save((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function hapus(req,res,next){
  Contents.findOne({
    _id:req.params.id
  },(err,items) => {
      if(err)throw err

      items.remove((err)=> {
        if(err) throw err
        res.json(items)
      })
  })
}

function display(req,res,next){
    Contents.find({},(err,result) => {
          res.json(result)
    })
}

function detail(req,res,next){
    Contents.findOne({
      _id:req.params.id
    },(err,result) => {
          res.json(result)
    })
}
