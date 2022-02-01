require('dotenv').config();

const express = require('express');
const path = require('path');
const passport = require('passport');
const { sequelize } = require('./data/models');

const PORT = process.env.PORT || 3500;

const app = express();

require('./config/passport')(passport);

app.use(passport.initialize());

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

//app.route('/', require('./routes/root')); //Página de inicio
app.route('/register', require('./routes/api/register'));
app.route('/login', require('./routes/api/authentication'));
app.route('/logout', require('./routes/api/logout'));
app.route('/protected-route', require('./routes/api/refresh'));

app.listen(PORT, async () => {
  await sequelize.sync({ force: true }); //Si está en true, rehace las tablas. Si está en false y no hay tablas, las hace de todos modos
  console.log(`Application running on port: ${PORT}`);
});