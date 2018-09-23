const axios = require('axios');

var exports = {};

module.exports.newPii = function (hash, encrypted) {
    return axios.post('/post-pii', {
        hash: hash,
        encrypted: encrypted
    });
}