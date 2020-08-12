const express = require("express");
const router = express.Router();
const controller = require("../controller/usuario/usuario");
const Usuario = require("../model/usuario")


router.get('/', function (req, res) {
  res.render('usuario/login',{
    title: 'Login'
  })
});

router.get('/registro', function (req, res) {
  const usuario = new Usuario()
  res.render('usuario/registro', {
    title: 'Novo Usuário'
  })

});



//router.post("/", controller.criar);
//router.get("/", controller.busca);
//router.delete("/:id", controller.delete);



module.exports = router;
