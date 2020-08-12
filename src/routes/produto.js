const express = require('express')
const router = express.Router();


router.get('produto/:slug', require('../controller/produto/show'))


module.exports = router;