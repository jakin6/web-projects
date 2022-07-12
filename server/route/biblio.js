const express = require('express')
const router =express.Router();

const bookController = require('../controller/book')

//book crud
router.get('/book',bookController.view)

module.exports=router
