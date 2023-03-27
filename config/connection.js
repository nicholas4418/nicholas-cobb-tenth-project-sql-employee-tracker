//importing requirements
const mysql = require("mysql2");
//using env for password and other db info
require("dotenv").config();

//connection to database
const connection = mysql.createConnection(
    {
        host: "localhost",
        port: process.env.PORT,
        user: "root",
        database: "employees_db",
        password: process.env.DB_PASSWORD
    });

module.exports = connect;
