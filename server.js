require('dotenv').config();

const express = require('express');
const path = require('path');
const passport = require('passport');
const { sequelize } = require('./data/models');

const PORT = process.env.PORT || 3500;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/passport')(passport);
app.use(passport.initialize());

app.get('/', (req, res) => res.json({msg: "pagina principal"})); //Página de inicio

app.use('/register', require('./routes/api/register'));
app.use('/login', require('./routes/api/authentication'));
app.use('/logout', require('./routes/api/logout'));
app.use('/protected-route', require('./routes/api/refresh'));

app.listen(PORT, async () => {
  await sequelize.sync({ force: false }); //Si está en true, rehace las tablas. Si está en false y no hay tablas, las hace de todos modos
  console.log(`Application running on port: ${PORT}`);
});