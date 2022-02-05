const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const generateKeyPair = async () => {
  const keyPair = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem'
    }
  });

  const mainPath = path.join(__dirname, '..');
  fs.writeFileSync(mainPath + '/rsa_pub.pem', keyPair.publicKey)
  fs.writeFileSync(mainPath + '/rsa_priv.pem', keyPair.privateKey)
}

generateKeyPair();