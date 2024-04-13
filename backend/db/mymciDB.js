const mysql = require('mysql');

const mymciDB = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"simcard_data"
})

module.exports = mymciDB