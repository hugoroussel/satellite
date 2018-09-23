const axios = require('axios');

var exports = {};

exports.newPii = function (hash, encrypted) {
    axios.post('/post-pii', {
        hash: hash,
        encrypted: encrypted
    });
}