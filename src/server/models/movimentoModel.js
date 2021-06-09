const mongoose = require('mongoose')

const movimento = new mongoose.Schema({
    entrata: Boolean,
    ammontare: Number,
    data: Date,
    descrizione: String
})

const movimentoModel = mongoose.model('movimento',movimento)

module.exports = movimentoModel