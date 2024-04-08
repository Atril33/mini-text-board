const mongoose = require('mongoose');

const createUserModel = new mongoose.Schema({
  user: String,
  text: String,
  added: String,
})

module.exports = mongoose.model('User', createUserModel);

