const http = require('http')
const express = require('express');
const status = require("http-status");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressLayouts = require('express-ejs-layouts')
const path = require('path');







const app = express();


app.set('layout extractScripts', true)
app.set('layout extractStyles', true)


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs')     // Setamos que nossa engine será o ejs
app.use(expressLayouts)           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static('public'));




//rotas
require('./src/database/database') //banco de dados
require('./src/index')(app) //rotas






//middlewares
app.use((request, response, next) => {
  response.status(status.NOT_FOUND).send();
});

app.use((error, request, response, next) => {
  response.status(status.INTERNAL_SERVER_ERROR).json({ error });
});





//cria servidor
  const server = http.createServer(app);
  server.listen(9000, () => console.log('Servidor express rodando'));


//cria o servirdor com express e informa em qual porta é
//const server = http.createServer(app);
//app.listen(8081, function(){
 //   console.log("servidor rodando") 
//});
//localhost:8081



