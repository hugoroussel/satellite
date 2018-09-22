const Eos = require('../../node_modules/eosjs');
const Crypto = require('./crypto.js');

// Either ask from UI, or hardcode in environment variable, we'll see later
const privateKey = "5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5";

const conf = {
    keyProvider: privateKey,
    httpEndpoint: 'http://127.0.0.1:8888'
};
const eos = Eos(conf);

// Some interaction examples
// eos.getInfo({})
//     .then(console.log);


// Crypto usage
// let pair = Crypto.newKeyPair(8 * 100);
// let txt = "LOL";
// let enc = Crypto.encrypt(pair['public'], txt);
// let dec = Crypto.decrypt(pair['private'], enc);
