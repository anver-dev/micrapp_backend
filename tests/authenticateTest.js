const auth = require('../services/authenticationService');
//const auth = require('../domain/authenticationBusiness');

const test = async () => {
  const log = await auth.login({email: 'rosa28gato@gmail.com', pwd: '1234'});
  console.log(log);
}

test();