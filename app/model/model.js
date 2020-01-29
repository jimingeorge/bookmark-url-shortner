const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bookmarkSchema = new Schema({
    id:{
        type:Schema.Types.ObjectId        
    },
    title:{
        type:String,
        required:true
    },
    originalURL:{
        type:String,
        required:true
    },
    tags:[{
        type:String,
        required:true
    }],
    hashed_url:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: new Date(),
        required:true
    }
})

const Bookmark = mongoose.model('Bookmark',bookmarkSchema)

module.exports=Bookmark