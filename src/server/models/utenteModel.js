const mongoose = require('mongoose');

const utenteSchema = new mongoose.Schema({
    username: String,
    password: String
}
)

const utenteModel = mongoose.model('utente', utenteSchema)

module.exports = utenteModel;