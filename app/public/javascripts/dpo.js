const Chain = require('./chain');

function loadPendingRequests() {
    Chain.getRequests().then(displayRequests);
}

function displayRequests(requests) {

}

function handleValid(item) {

    console.log("Validated")
}

function handleRefused(item) {

    console.log("Refused")

}

// populateTableBody, data [{'motivation' : '...' see below}], true if request.html, false if dashboard
function populateTableBody(tableBodyID, json_obj, spec) {
    var oldTable = document.getElementById(tableBodyID);
    newTable = document.createElement('tbody');
    newTable.id = tableBodyID;
    for (var i = 0; i < json_obj.length; i++) {
        var tr = document.createElement('tr');
        p = json_obj[i];
        for (var key in p) {
            if (p.hasOwnProperty(key)) {
                var td = document.createElement('td');
                if (key == 'motivation') {
                    td.innerHTML = '<i>' + p[key] + '</i>';
                } else if (key == 'sensitivity') {
                    td.innerHTML =
                        '<span class="badge badge-secondary" data-toggle="popover" data-trigger="hover" data-content="First Name, Last Name">' +
                        p[key] + '</span>';
                } else if (key == 'timestamp') {
                    td.innerHTML = '<div class="small text-muted">18/09/2018</div><strong>' +
                        p[key] +
                        '</strong>';
                } else {
                    td.innerHTML = p[key];
                }
                tr.appendChild(td);
            }
        }
        if (spec == true) {
            var td = document.createElement('td');
            td.classList.add('ccenter');
            td.innerHTML =
                '<button class="btn btn-sm btn-success" onclick="handleValid(this)"> <i class="fa fa-check"></i></button> <button class="btn btn-sm btn-danger" onclick="handleRefused(this)"><i class="fa fa-times"></i></button>';
            tr.appendChild(td);
        }
        newTable.appendChild(tr);
    }

    oldTable.parentNode.replaceChild(newTable, oldTable);
};