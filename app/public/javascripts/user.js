const Chain = require('./chain');

function getDependencies(userAcc) {
    Chain.getDependencies()
        .then(elems => {
            return elems.filter(elem => {
                return elem.account == userAcc;
            })
        })
        .then(displayDependencies);
}

function displayDependencies(dependencies) {

}