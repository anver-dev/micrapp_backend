const auth = require('../services/userService');
//const auth = require('../domain/userBusiness');

const test = async () => {
  const log = await auth.login({email: 'rosa28gato@gmail.com', pwd: '1234'});
  console.log('resultado del log:');
  console.log(log);
}

test();