const Sequelize = require('sequelize' );
const sequelize = require("../database/database");

//na primeira execucao cri a tabela no banco de dados caso nao esteja ja criada
const Usuario = sequelize.define("usuario", {
    id:{
        //nao pode ser nulo
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER

    },
    nome:{
        allowNull: false,
        type: Sequelize.STRING(100),
        required: true,
        validate:{
            len: [3,100]
        }
    },
    email:{
        allowNull: false,
        type: Sequelize.STRING(100),
        required: true,
        validate:{
            len: [5,100]
        }
    },
    senha:{
        allowNull: false,
        type: Sequelize.STRING,
        required: true
    }
});

module.exports = Usuario; 

