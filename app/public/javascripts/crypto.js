const NodeRSA = require('node-rsa');
const crypto = require('crypto');

var exports = {};

exports.hash = function (payload) {
    return crypto.createHmac('sha256', 'secret')
        .update(payload)
        .digest('hex');
}

exports.newKeyPair = function (size) {
    const key = new NodeRSA();
    key.generateKeyPair(size);
    return {
        'public': key.exportKey('public'),
        'private': key.exportKey('private')
    };
}

exports.privateToPublic = function (privateKey) {
    const key = new NodeRSA();
    key.importKey(privateKey);
    return key.exportKey('public');
}

exports.encrypt = function (publicKey, payload) {
    const key = new NodeRSA();
    key.importKey(publicKey, 'public');
    return key.encrypt(payload, 'base64');
}

exports.decrypt = function (privateKey, payload) {
    const key = new NodeRSA();
    key.importKey(privateKey, 'private');
    return key.decrypt(payload, 'utf8');
}

module.exports = exports;