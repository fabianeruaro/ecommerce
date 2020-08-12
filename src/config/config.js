module.exports = {
    development:{
        database:{
            host: 'localhost',
            port: 3306,
            name: 'ecommerce',
            dialect: 'mysql',
            user: 'root',
            password: 'thor$2012'
        }
    },
    production: {
        database: {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT
        }
      }
    };

