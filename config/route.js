const express = require('express')
const router = express.Router()
const bookmarkCntrlr = require('../app/controller/bookmark-cntrlr')

router.get('/bookmarks/tags',bookmarkCntrlr.showManyTags)

router.get('/bookmarks',bookmarkCntrlr.list)
router.post('/bookmarks',bookmarkCntrlr.add)
router.delete('/bookmarks/:id',bookmarkCntrlr.destroy)
router.put('/bookmarks/:id',bookmarkCntrlr.update)
router.get('/bookmarks/:id',bookmarkCntrlr.show)

router.get('/:hash',bookmarkCntrlr.showHash)
router.get('/bookmarks/tags/:name',bookmarkCntrlr.showTag)


module.exports = router