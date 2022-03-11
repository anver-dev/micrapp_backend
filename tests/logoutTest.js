const logout = require('../services/logoutService');
//const logout = require('../domain/logoutBusiness');

const test = async () => {
  const log = await logout.logout('hghpsfjeioffi');
  console.log('resultado del log:');
  console.log(log[0]);
}

test();