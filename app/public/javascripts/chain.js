const Eos = require('../../node_modules/eosjs');

const userAcc = "useraaaaaaaa";
const privateKey = "5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5";
const conf = {
    keyProvider: privateKey,
    httpEndpoint: 'http://127.0.0.1:8888'
};
const eos = Eos(conf);

const contractName = "satelliteacc";
const auth = userAcc + "@active";

function newEmployee(name) {
    return eos.contract(contractName)
        .then(acc => acc.add(name, { authorization: auth }))
        .then(console.log)
        .catch(console.log);
}

function deleteEmployee() {
    return eos.contract(contractName)
        .then(console.log)
        .catch(console.log);
}

function requestAccess(accessor, target) {
    return eos.contract(contractName)
        .then(console.log)
        .catch(console.log);
}