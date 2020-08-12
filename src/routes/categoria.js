const express = require("express")
const router = express.Router()


router.get('/:name', require('../controller/categoria/show'))



module.exports = router;