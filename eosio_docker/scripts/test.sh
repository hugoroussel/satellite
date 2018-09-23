#!/usr/bin/env bash


scripts/deploy_contract.sh satellite satelliteacc satellitewal $(cat satellite_wallet_password.txt)
cleos push action satelliteacc add '["satelliteacc", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "satelliteacc"]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc employee
cleos push action satelliteacc update '["satelliteacc", "dan", "vitalik", "satoshi", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "satelliteacc"]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc employee
cleos push action satelliteacc update '["satelliteacc", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "satelliteacc"]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc employee
cleos push action satelliteacc deleterec '["satelliteacc"]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc employee
cleos push action satelliteacc add '["satelliteacc", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "satelliteacc"]' -p satelliteacc@active
cleos push action satelliteacc add '["paul", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "paul"]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc employee
cleos push action satelliteacc addreq '["satelliteacc", "paul", "test", 1,1]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc request
cleos push action satelliteacc acceptreq '["satelliteacc", "paul", "test", 1,1,"satelliteacc", "findugame", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "satelliteacc"]' -p satelliteacc@active
cleos get table satelliteacc satelliteacc request
cleos get table satelliteacc satelliteacc employee


#cleos push action satelliteacc delrequest '["satelliteacc", "satelliteacc", "test2", 1,1]' -p satelliteacc@active
#cleos get table satelliteacc satelliteacc request
