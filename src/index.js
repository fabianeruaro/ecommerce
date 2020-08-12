module.exports = (app) => {


  const express = require('express')

  app.use('/', require('./routes/index'))
  app.use('/usuarios', require('./routes/usuario'));
  app.use('/categoria', require('./routes/categoria'));
  app.use('/produto', require('./routes/produto'));

}
