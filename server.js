const mysql = require('mysql2');
const express = require("express");
var cors = require('cors');
const window = require('Window');
const app = express();

app.use(cors());

const connection = mysql.createConnection({
    host: '210.114.22.146',
    user: 'root',
    password: 'ishs123!',
    database: 'zolbangdae'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log("Connected!");
    }
});

app.get('/', function (req, res) {
    const q = req.query;
    const id = q.id;
    const _class = q.class;
    console.log(id);
    console.log(_class);

    if(id == "zol1") {
        connection.query('SELECT * FROM zol1 WHERE class='+ _class, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
    else if(id == "zol2") {        
        connection.query('SELECT * FROM zol2 WHERE class='+ _class, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
    else if(id == "zol3") {
        connection.query('SELECT * FROM zol3 WHERE class='+ _class, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
    else if(id == "zol4") {
        connection.query('SELECT * FROM zol4 WHERE class='+ _class, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    }
    else {
        res.json({"id" : "error"});
    }
});

function reload() {

}


app.listen(3000);