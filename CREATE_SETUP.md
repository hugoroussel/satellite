# Boilerplate customization

This file aims at listing the instructions to get from the boilerplate repo to a ready to use framework for the hackathon.

## Architecture

The main architecture modifications are the following:

* No more `react` frontend framework because none of the team knows it. All the frontend related code is now under `myapp/public/`
* We add a `node.js` backend server additionally to the blockchain part. Right now it only serves the HTML pages, but we might be happy to have it if we end up building a more complete webapp with the blockchain being only a small part of it

The communication connections are the following:

* Browser <-> EOS
* Browser <-> backend

Note that there is no connection between the backend and EOS, which was provided by `demux` which is unreliable.

## Running instructions

1. Launch the EOS docker container `start_eosio_docker.sh`
2. Launch the backend server, in two different shells, run:
    1. `npm run bundle-watch`
    2. `npm start`

## Setup

Follow the instructions one by one to get ready:

1. `git clone https://github.com/EOSIO/eosio-project-boilerplate-simple/`
2. Download `node.js` and `docker`
3. Launch the docker daemon (or the app if using macOS)
4. Change image name in `first_time_setup.sh` and remove everything related to frontend
5. Change container name in `start_eosio_docker.sh`
6. In `eosio_docker/scripts/`:
    1. Change `notechainwal` wallet name
    2. Change password output file `notechain_wallet_password.txt`
    3. Change `notechainacc` account name
    4. Comment the contract deployment step for now
    5. Change user accounts names in accounts.json if desired
    6. Comment the mock data population step
7. Get rid of the `react` environment
    1. Remove everything in `frontend/`
    2. `npm install express-generator -g`
    3. `express myapp —no-view` (change application name)
    4. Add `eosjs` as dependencies
    5. `npm install`
    6. `npm install nodemon browserify watchify -g`
    7. Update the scripts of `package.json`:
```
"scripts": {
    "bundle": "browserify public/javascripts/index.js -o public/javascripts/bundle.js",
    "bundle-watch": "watchify public/javascripts/index.js -o public/javascripts/bundle.js",
    "start": "nodemon ./bin/www"
}
```

7. Run `first_time_setup.sh`
8. In a new shell run `start_eosio_docker.sh`, it should start to produce blocks
9. Open a new shell and run `docker exec -it <container_name> /bin/bash`. This is going to be the shell to interact with the chain directly using cleos, and deploy contracts
10. Run the backend server
    1.  In a new shell: `npm run bundle-watch`
    2.  In a new shell: `npm start`
11. All good

## Tips

This section gathers some useful tips for diverse tasks

* Deploy a contract:
    * Get in the EOS container `docker exec -it eosio_satellite_container /bin/bash`
    * Deploy the contract `scripts/deploy_contract.sh satellite satelliteacc satellitewal $(cat satellite_wallet_password.txt)`
    * Note that the contract folder is tied to the container so no data should be manually copied
* Look at the running docker containers: `docker ps`
* Stop a container: `docker stop eosio_satellite_container`
* Remove a container (mainly to reset everything): `docker rm --force eosio_satellite_container`
