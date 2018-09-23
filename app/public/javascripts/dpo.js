const Chain = require('./chain');
const Crypto = require('./crypto');

function loadPendingRequests() {
    Chain.getRequests().then(displayRequests);
}

function displayRequests(requests) {

}