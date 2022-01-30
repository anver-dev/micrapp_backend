//Configuración de autenticación con passport
/*
  Aquí se especifica lo que se debe hacer cuando un usuario intenta ingresar a una ruta protegida
  Es decir, se especifica lo que va a hacer la llamada a la función passport.authenticate()
  cuando se llama en las rutas
*/

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const userService = require('../services/userService');

const PUB_KEY = 'alguna llave rsa';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
};

//Función anónima para configurar la autenticación con passport
module.exports = (passport) => {
  // El payload del token es pasado en la función de verificación
  passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
    console.log(jwt_payload);

    const id = jwt_payload.sub;

    try {
      const user = await userService.getUserById(id);
      if (!user) return done(null, false);

      return (null, user);
    } catch (err) {
      return done(err, false);
    }
  }));
}