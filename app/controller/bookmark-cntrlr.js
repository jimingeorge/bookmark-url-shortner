const Bookmark = require('../model/model')
const validator = require('validator');
const sh = require("shorthash");
 


module.exports.list = (req,res)=>{
    Bookmark.find()
        .then(bookmarks=>res.json(bookmarks))
        .catch(err=>res.json(err))
}

module.exports.show=(req,res)=>{
    const id = req.params.id
    Bookmark.findById(id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

module.exports.add = (req,res)=>{
    let body = req.body
    const url = body.original_url
    console.log(body)
    console.log(validator.isDataURI('https://npmdoc.github.io/node-npmdoc-express-validator/build/apidoc.html#apidoc.element.express-validator.validator.isDataURI'))
    if(validator.isDataURI(url)){
        
        
        
        schema.pre('save', function() {
            const hashed = sh.unique(url)
            
            return hashed.
                then(() =>{
                    body.hashedUrl = hashed
                    const bookmark = new Bookmark(body)
                    bookmark.save()
                        .then(book=>res.json(book))
                        .catch(err=>res.json(err))
                });
            });    
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