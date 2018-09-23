const Chain = require('./chain');

function loadPendingRequests() {
    Chain.getRequests().then(displayRequests);
}

function displayRequests(requests) {

}