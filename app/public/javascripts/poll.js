const EosApi = require('../../node_modules/eosjs-api');
const eos = EosApi();

const userAcc = "satelliteacc";
const notifs = [];
const actions = [
    { name: "hello", processor: process }
];

window.setInterval(poll, 2 * 1000);

function poll() {
    eos.getActions(userAcc)
        .then(res => {
            actions.forEach(action => {
                let filteredActions = filterActions(action.name, res.actions);
                filteredActions.forEach(elem => {
                    action.processor(elem);
                });
            });
        });
}

function process(action) {
    console.log(action.action_trace.act.name);
}

function filterActions(name, actions) {
    return actions.filter(elem => {
        return elem.action_trace.act.name == name;
    });
}