const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String, //Tipando o firstName
    required: true, //quer dizer que e um requisito, nao pode ficar sem, se ficar nao vai pro banco
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7, // Definindo um número Mínimo de caracteres para ser aceito
  },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
