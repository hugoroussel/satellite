const Eos = require('../../node_modules/eosjs');

const userAcc = "employee1111";
const privateKey = "5KLqT1UFxVnKRWkjvhFur4sECrPhciuUqsYRihc1p9rxhXQMZBg";
const conf = {
    keyProvider: privateKey,
    httpEndpoint: 'http://127.0.0.1:8888'
};
const eos = Eos(conf);

const contractName = "satelliteacc";
var exports = {};

exports.newEmployee = function (userAcc, firstname, lastname, address, nationality, gender, martial, children, blood, email, phone, sens, notSens, accessor) {
    let args = {
        person: userAcc,
        hash_first_name: firstname,
        hash_last_name: lastname,
        hash_address: address,
        hash_nationality: nationality,
        hash_gender: gender,
        hash_martial_status: martial,
        hash_children_number: children,
        hash_blodd_type: blood,
        hash_email: email,
        hash_phone_num: phone,
        sensitive: sens,
        not_sensitive: notSens,
        accessor: accessor
    }

    return eos.contract(contractName)
        .then(acc => acc.add(args, { authorization: userAcc + "@active" }))
        .then(console.log)
}



exports.newRequest = function (from, to, hashdes, sensitive) {
    return eos.contract('satelliteacc')
        .then(acc => acc.addreq(from, to, hashdes, sensitive, false))
        .then(console.log);
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

exports.getData = function (userAcc, accessor) {
    return eos.getTableRows({
        code: contractName,
        scope: contractName,
        table: 'employee',
        json: true,
    })
        .then(res => res.rows)
}

exports.getDependencies = function () {
    return eos.getTableRows({
        code: contractName,
        scope: contractName,
        table: 'employee',
        json: true,
    })
        .then(res => {
            return res.rows.map(elem => {
                return {
                    target: elem._person,
                    accessor: elem._accessor
                }
            });
        });
}

exports.getRow = function (target, accessor) {
    return eos.getTableRows({
        code: contractName,
        scope: contractName,
        table: 'employee',
        json: true,
    })
        .then(res => {
            return res.rows.filter(elem => {
                return elem._person == target && elem._accessor == accessor;
            });
        })
        .then(res => res[0]);
}

exports.getRequest = function (hashDescription) {
    return eos.getTableRows({
        code: contractName,
        scope: contractName,
        table: 'requests',
        json: true,
    })
        .then(res => {
            return res.rows.filter(elem => {
                return elem._hash_description == hashDescription;
            });
        })
        .then(res => res[0]);
}

module.exports = exports;