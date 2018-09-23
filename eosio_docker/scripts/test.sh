#!/usr/bin/env bash
scripts/deploy_contract.sh satellite satelliteacc satellitewal $(cat satellite_wallet_password.txt)
cleos push action satelliteacc add '["satelliteacc", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "satelliteacc"]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc employee
cleos push action satelliteacc update '["satelliteacc", "dan", "vitalik", "satoshi", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "sat"]' -p satelliteacc@active
