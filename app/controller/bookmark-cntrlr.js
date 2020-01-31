const Bookmark = require('../model/model')
const validator = require('validator');

module.exports.list = (req,res)=>{
    Bookmark.find()
        .then(bookmarks=>res.json(bookmarks))
        .catch(err=>res.json(err.message))
}

module.exports.show=(req,res)=>{
    const id = req.params.id
    Bookmark.findById(id)
        .then(data=>{
            if(bookmark){
                res.json(data)
            }else{
                res.json({})
            }
        })
        .catch(err=>res.json(err))
}

module.exports.add = (req,res)=>{
    let body = req.body
    const url = body.originalUrl
    console.log(body)
    
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

module.exports.showHash = (req,res)=>{
    const hash= req.params.hash
    Bookmark.findOne({hashedUrl:hash},(err,nonerr)=>{
        if(nonerr){
            res.redirect(nonerr.originalUrl)
        }else{
            res.send('error')
        }
    })
        .then(dat=>res.json(dat))
        .catch(err=>res.json(err))
}

module.exports.showTag = (req,res)=>{
    const tags= req.params.name
    console.log(req.params)
    Bookmark.find({tags})
        .then(dat=>res.json(dat))
        .catch(err=>res.json(err))
}

module.exports.showManyTags = (req,res)=>{
    const tags= req.query.names.split(',')
    console.log(tags)
    Bookmark.find({tags:{"$in":tags}})
        .then(dat=>res.json(dat))
        .catch(err=>res.json(err))
}