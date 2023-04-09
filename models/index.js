const db = require("../db");

module.exports = {
    get: (id, callback) => {
        const queryString = `SELECT * FROM person WHERE (table_name = ?)`;
        const params = [Number(id)];

        db.query(queryString, params, (err, result) => {
            callback(err, result);
    })
    },
    post: (name, callback) => {
        const queryString = `INSERT INTO person (table_name) VALUES (?);`;

        const params = [name];

        db.query(queryString, params, (err, result) => {
            callback(err, result);
    })
    }
}