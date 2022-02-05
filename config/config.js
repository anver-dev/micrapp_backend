require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME_DEVELOPMENT || "root",
    "password": process.env.DB_PASSWORD_DEVELOPMENT || "",
    "database": process.env.DB_DATABASE_DEVELOPMENT || "micrapp_server",
    "host": process.env.DB_HOST_DEVELOPMENT || "127.0.0.1",
    "dialect": "mysql",
    logging: false //esto es para evitar que esté imprimiendo en pantalla los querys
  },
  "test": {
    "username": process.env.DB_USERNAME_TEST || "root",
    "password": process.env.DB_PASSWORD_TEST || "",
    "database": process.env.DB_DATABASE_TEST || "micrapp_server_tests",
    "host": process.env.DB_HOST_TEST || "127.0.0.1",
    "dialect": "mysql",
    logging: false
  },
  "production": {
    "username": process.env.DB_USERNAME_PRODUCTION || "root",
    "password": process.env.DB_PASSWORD_PRODUCTION || "",
    "database": process.env.DB_DATABASE_PRODUCTION || "micrapp_server",
    "host": process.env.DB_HOST_PRODUCTION || "127.0.0.1",
    "dialect": "mysql",
    logging: false
  }
}
