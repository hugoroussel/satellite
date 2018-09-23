const Eos = require('../../node_modules/eosjs');

const userAcc = "useraaaaaaaa";
const privateKey = "5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5";
const conf = {
    keyProvider: privateKey,
    httpEndpoint: 'http://127.0.0.1:8888'
};
const eos = Eos(conf);

const contractName = "satelliteacc";
var exports = {};

exports.newEmployee = function (userAcc, name) {
    return eos.contract(contractName)
        .then(acc => acc.add(userAcc, name, { authorization: userAcc + "@active" }))
        .then(console.log)
        .catch(console.log);
}

exports.deleteEmployee = function (userAcc) {
    return eos.contract(contractName)
        .then(acc => acc.remove(userAcc))
        .then(console.log)
        .catch(console.log);
}

exports.requestAccess = function (accessor, target) {
    return eos.contract(contractName)
        .then(console.log)
        .catch(console.log);
}

exports.newAccessor = function (userAcc, accessor, reason1, reason2, name) {
    return eos.contract(contractName)
        .then(acc => acc.newAccessor(userAcc, accessor, reason1, reason2, name))
        .then(console.log)
        .catch(console.log);
}

exports.getRequests = function () {
    return eos.getTableRows({
        code: contractName,
        scope: contractName,
        table: '_requests',
        json: true,
    })
        .then(res => {
            return res;
        });
}

exports.getDependencies = function () {
    return eos.getTableRows({
        code: contractName,
        scope: contractName,
        table: '_employees',
        json: true,
    })
        .then(res => {
            res.map(elem => {
                console.log(elem);
                return elem[0];
            });
        })
}

module.exports = exports;