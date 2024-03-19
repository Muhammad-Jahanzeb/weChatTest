const express = require('express')
const {test, testAPI}=require('../controller/controller')

const router = express.Router()

router.get('/testAPI', testAPI)

router.get('/test', test)

module.exports = router