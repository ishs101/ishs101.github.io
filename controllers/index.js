const models = require('../models');

module.exports = {
    get: (request, response) => {
        const id = req.params.id;

        if(!id) {
            return res.status(401).send('')
    }
}