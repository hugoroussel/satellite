const Crypto = require('./crypto');
const Chain = require('./chain');
const Data = require('./data');

const fake = [
    {
        account: 'employee1111',
        publicKey: 'oieoid',
        personal: ['Paulo', 'Nicolet', 'address', 'nationality', 'gender', 'martial', 'children', 'blood', 'email', 'phone'],
        accessors: [{ account: 'Hugo', reason1: 'LOL', reason2: '' }]
    }
]

module.exports = {
    populate: function () {
        fake.forEach(user => {
            // TODO populate UI drop down with users and private keys

            // Generate private and public key
            keys = Crypto.newKeyPair(8 * 50);

            // Encrypt and hash data
            let encrypted = user.personal.map(data => {
                return Crypto.encrypt(keys.public, data);
            });

            let hashed = encrypted.map(data => {
                return Crypto.hash(data);
            });

            Chain.newEmployee(user.account, hashed[0], hashed[1], hashed[2], hashed[3], hashed[4], hashed[5], hashed[6], hashed[7], hashed[8], hashed[9]);

            for (i = 0; i < hashed.length; i++) {
                Data.newPii(hashed[i], encrypted[i]);
            }

            // // Manage relations
            // accessors.forEach(accessor => {
            //     Chain.requestAccess(user.account, accessor.account, accessor.reason1, accessor.reason2, hashed[0])
            // });
        });
    }
}