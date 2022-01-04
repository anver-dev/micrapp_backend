const express = require('express');

const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
};

const handleRefreshToken = (req, res) => {};

module.exports = { handleRefreshToken };