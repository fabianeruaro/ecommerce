//conexao com o banco de dados
const Sequelize = require('sequelize' );

//caso o env nao esteja disponivel usa o dev
const environment = process.env.NODE_ENV || 'development'
//importa o modulo e as informacao do tipo env confiuradas  
const config =  require('../config/config.js')[environment];


//conecta o banco
const conexao = new Sequelize(config.database.name, config.database.user, config.database.password,{
    host: config.database.host,
    dialect: config.database.dialect
} );

conexao.authenticate().then(() =>
console.log('Banco conectado com sucesso')).catch(() =>
console.log('Erro ao conectar banco'));

//cria no banco as tabelas de forma automática
conexao.sync();


module.exports = conexao;
