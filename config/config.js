require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "",
    "database": process.env.DB_DATABASE || "micrapp_server",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql",
    logging: false //esto es para evitar que esté imprimiendo en pantalla los querys
  },
  "test": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "",
    "database": process.env.DB_DATABASE || "micrapp_server_tests",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql",
    logging: console.log //console.log
  },
  "production": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "",
    "database": process.env.DB_DATABASE || "micrapp_server",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql",
    logging: false
  }
}
