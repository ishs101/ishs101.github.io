const dotenv = require('dotenv');
dotenv.config();

const config = {
    development: {
        host: 'zolbangdae.cpbzudviqiwu.ap-southeast-2.rds.amazonaws.com',
        user: 'admin',
        password: 'ishs12345!',
        database: 'zolbangdae'
    }
},
test: {
    host: 'zolbangdae.cpbzudviqiwu.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'ishs12345!',
    database: 'zolbangdae_test'
}

module.exports = config;