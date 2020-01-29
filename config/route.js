const express = require('express')
const router = express.Router()
const bookmarkCntrlr = require('../app/controller/bookmark-cntrlr')

router.get('/bookmarks',bookmarkCntrlr.list)
router.post('/bookmarks',bookmarkCntrlr.add)
router.delete('/bookmarks/:id',bookmarkCntrlr.destroy)

router.get('/bookmarks/:id',bookmarkCntrlr.show)

module.exports = router