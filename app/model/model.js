const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sh = require("shorthash");


const bookmarkSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    originalUrl:{
        type:String,
        required:true
    },
    tags:[{
        type:String,
        required:true
    }],
    hashedUrl:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: new Date(),
        required:true
    }
})



bookmarkSchema.pre('save', function (next) {
    var self = this;
    self.hashedUrl = sh.unique(self.originalUrl)    
    next()

})  

bookmarkSchema.pre('findOneAndUpdate', function (next) {
    var self = this;
    self._update.hashedUrl = sh.unique(self._update.originalUrl)  
    console.log(self.hashedUrl)
    next()

}) 

const Bookmark = mongoose.model('Bookmark',bookmarkSchema)

module.exports=Bookmark
// module.exports=bookmarkSchema

// module.exports={
//     Bookmark,
//     bookmarkSchema
// }