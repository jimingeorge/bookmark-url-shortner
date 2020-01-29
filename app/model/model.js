const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bookmarkSchema = new Schema({
    Id:{
        type:Schema.Types.ObjectId,
        required:true        
    },
    Title:{
        type:String,
        required:true
    },
    OriginalURL:{
        type:String,
        required:true
    },
    Tags:[{
        type:String,
        required:true
    }],
    HashedURL:{
        type:String,
        required:true
    },
    CreatedAt:{
        type:Date,
        default: new Date(),
        required:true
    }
})

const Bookmark = mongoose.model('Bookmark',bookmarkSchema)

module.exports=Bookmark