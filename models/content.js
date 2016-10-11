var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var contentSchema = mongoose.Schema({
    judul:String,
    isi:String,
    hashtag:String
})

module.exports= mongoose.model('content', contentSchema)
