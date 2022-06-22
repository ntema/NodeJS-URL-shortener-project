const express = require('express')
const router = express.Router()
const {postController} = require('../controller/postController')

router.post('/shorturl', postController)

module.exports = router