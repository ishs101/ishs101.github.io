const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

let client = mysql.createConnection({
    host: 'zolbangdae.cpbzudviqiwu.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'ishs12345!',
    database: 'ZolBangDae'
});
router.get('/form1', function (req, res, next) {
    router.get('/form1', function (req, res, next) {
        if (err) {
            console.log(err);
            console.log('Error in Query');
        }
        else{
            res.render('form1', {
                results: result
            });
        }
    });
});
