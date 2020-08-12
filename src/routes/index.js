const express = require('express')
const router = express.Router();




router.get('/', (req, res) => {
    res.render('main/main', {
      title: 'Marcon Atacado'
    })
  })
  


module.exports = router;