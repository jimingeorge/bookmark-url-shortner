const express = require('express')
const app = express()
const setupDB = require('./config/database')
const router = require('./config/route')
const port = 3000

app.use(express.json())

setupDB()

app.use('/',router)

app.get('/',(req,res)=>{
    res.json({
        msg: 'Welcome to Bookmark & Url-Shortner App'
    })
})


app.listen(port,()=>console.log('listening to ',port))
