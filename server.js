const fs = require('fs');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
var name = "";

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.username,
    password: conf.password,
    database: conf.database
});

connection.connect(function (err) {
    if (err) throw err;
    else {
        console.log("Connected!");
    }
    });