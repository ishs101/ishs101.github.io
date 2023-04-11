const fs = require('fs');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql2');
const express = require("express");
const serveStatic = require('serve-static');
const http = require('http');
const path = require('path');

const app = express();
const bodyParser_post = require('body-parser');

app.set('port', 3000);

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log("Connected!");
    }
});

app.use(serveStatic(path.join(__dirname, 'public')));
app.use(bodyParser_post.urlencoded({ extended: false }));
app.use(bodyParser_post.json());
app.use(
    function (req, res, next) {
        console.log('middle wared was called : first');
        var userAgent = req.header('User-Agent');
        var paramName = req.body.name || req.query.name;
        var paramStuNum = req.body.stunum || req.query.stunum;
        var parampw = req.body.pw || req.query.pw;
        res.send(userAgent + paramName + paramStuNum + parampw);
    }
)
var appServer = http.createServer(app);
appServer.listen(app.get('port'), function () {
    console.log("Server is running on port " + app.get('port'));
});