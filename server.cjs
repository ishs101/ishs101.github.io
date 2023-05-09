const mysql = require('mysql2');
const express = require("express");
const serveStatic = require('serve-static');


const connection = mysql.createConnection({
    host: 'zolbangdae.cpbzudviqiwu.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'ishs12345!',
    database: 'ZolBangDae'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    else {
        console.log("Connected!");
    }
});

connection.query('SELECT * FROM zol1', function (err, result, fields) {
    if (err) throw error;
    console.log(result);
});