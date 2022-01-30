require('dotenv').config();

const express = require('express');
const path = require('path');
const passport = require('passport');

const PORT = process.env.PORT || 3500;

const app = express();

const { sequelize } = require('./data/models');
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
  await sequelize.sync({ force: false }); //Si está en true, rehace las tablas
  console.log(`Application running on port: ${PORT}`);
});