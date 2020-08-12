const express = require("express");
const Usuario = require("../../model/usuario");



exports.criar = (req, res) => {
  let data = {
      nome: req.body.nome, 
      email: req.body.email,
      senha: req.body.senha

  }

  Usuario.register(data, (error, usuarios) => {
    if(error) {
      return res.redirect('/')
    }

    return res.redirect('/usuarios')
  })

}