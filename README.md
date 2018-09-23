
![alt text](/app/public/img/brand/logo.svg)
## About

Satellite provides companies with a private blockchain environment on the EOS plateform, to help them comply with the transparency and liability rules of the new GDPR regulation.

## Goal & philosophy:
GDPR is now on everyone’s lips, costing companies millions of dollars. While many see it as a threat, others see an opportunity to bump up revenues with new businesses on privacy savy consumers. </br> Employees are now not only given the tools to manage their data but also the help they need to do so. The data privacy officer will allow different stakeholders to access one’s data and depending on the level of sensitivity, will ask directly for the data owner’s approval. </br> Requesters are incentivised to justify their needs in convincing terms to motivate authorisation.The owner is also given full power on modification or, should the situation require it, deletion of their data. This is a non repudiable proof of access rights and edits but most importantly logs of requests from the data stored.

## Key principles

Satellite aims at providing multiple facets to comply with the GDPR text: 

* Transparency of third party access through blockchain
* Respect of the right to be forgotten

We use RSA encryption scheme and hashing techniques to only store hashes of encrypted personal data on chain, having to value on its own except as a reference to an externable database. Data Protection Officer and the personal data owner have most of the rights, and can decide to attribute accesses on third parties following multiple rules. All of this being transparent and privacy compliant using blockchain and cryptography.

## System

### Blockchain

The blockchain side plays a role of immutable ledger witnessing any action and update of authorisation access to any private information. We also store hashed of encrypted personal information on chain.

We use the eos-dev 1.2.5 docker image to run a single node, on which the Satellite contract can be deployed and tested using the `test.sh` script.

**Note** that the contract is fully functional and implements the entire actions necessary for the system to run.

### Backend
We use a simple backend application to store the encrypted personal data. It allows to comply with the right to be forgotten, since the chain only contains hashes as references, which become dead ends when deleted information. Moreover, since access management supported by asymetric key cryptography is done on-chain, none can bypass the contract and get valuable information.

### Frontend
The frontend is implemented using multiple libraries as `nodejs`, `bootstrap` and `eosjs`. 

## Where
EOS hackathon in London

### Challenge

Create an application on the EOSIO platform that improves the relationship between technology and user's privacy or security

## When
22 to 23 september 2018




## Team

- [Vincent Ballet](https://github.com/vicentballet)
- [Antoine Laurens](https://github.com/alaurens)
- [Hugo Moreau](https://github.com/hmoreau94)
- [Paul Nicolet](https://github.com/paulnicolet)
- [Hugo Roussel](https://github.com/hugoroussel)
