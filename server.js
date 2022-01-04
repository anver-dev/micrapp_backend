const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3500;

const app = express();

//app.route('/', require('./routes/root')); //Página de inicio
app.route('/register', require('./routes/api/register'));
app.route('/login', require('./routes/api/authentication'));
app.route('/logout', require('./routes/api/logout'));

app.listen(PORT, () => console.log(PORT));