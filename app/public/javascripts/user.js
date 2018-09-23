const Chain = require('./chain');

function getDependencies(userAcc) {
    Chain.getDependencies()
        .then(elems => {
            return elems.filter(elem => {
                return elem.target == userAcc;
            })
        })
        .then(displayDependencies);
}

function displayDependencies(dependencies) {

}