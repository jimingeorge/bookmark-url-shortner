const Bookmark = require('../model/model')
const validator = require('validator');

//const bookmarkSchema = require('../model/model')


module.exports.list = (req,res)=>{
    Bookmark.find()
        .then(bookmarks=>res.json(bookmarks))
        .catch(err=>res.json(err.message))
}

module.exports.show=(req,res)=>{
    const id = req.params.id
    Bookmark.findById(id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

module.exports.add = (req,res)=>{
    let body = req.body
    const url = body.originalUrl
    console.log(body)
    //console.log(validator.isURL('https://dctacademy.com/2018/05/become-full-stack-javascript-developer/'))
    if(validator.isURL(url)){
    const bookmark = new Bookmark(body)
    bookmark.save(body)
            .then(bookmark=>res.json(bookmark))
            .catch(err=>res.json(err))                            
    }else{
        res.json('Please check the url')
    }
        
    
}

module.exports.update= (req,res)=>{
    const id =req.params.id
    const body = req.body
    Bookmark.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

module.exports.destroy = (req,res)=>{
    const id= req.params.id
    Bookmark.findByIdAndDelete(id)
        .then(dat=>res.json(dat))
        .catch(err=>res.json(err))
}