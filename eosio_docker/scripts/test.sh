#!/usr/bin/env bash
scripts/deploy_contract.sh satellite satelliteacc satellitewal $(cat satellite_wallet_password.txt)
cleos push action satelliteacc add '["satelliteacc", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "satelliteacc"]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc employee
cleos push action satelliteacc update '["satelliteacc", "dan", "vitalik", "satoshi", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "sat"]' -p satelliteacc@active
cleos push action satelliteacc addreq '["satelliteacc", "satelliteacc", "test2", 1,1]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc request
cleos push action satelliteacc delrequest '["satelliteacc", "satelliteacc", "test2", 1,1]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc request
cleos push action satelliteacc addreq '["satelliteacc", "satelliteacc", "test1", 1,1]' -p satelliteacc@active
cleos push action satelliteacc acceptreq '["satelliteacc", "satelliteacc", "test", 1,1,"satelliteacc", "findugame", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "satelliteacc"]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc request
cleos get table satelliteacc satelliteacc employee
