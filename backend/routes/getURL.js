const express = require('express')
const router = express.Router()
const { getController } = require('../controller/getController')

router.get('/:code', getController)

module.exports = router