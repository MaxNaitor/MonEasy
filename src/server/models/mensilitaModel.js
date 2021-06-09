const mongoose = require('mongoose')
const movimentoModel = require('./movimentoModel')

const mensilita = new mongoose.Schema({
    utente: String,
    mese: Number,
    anno: Number,
    movimenti: [{
        entrata: Boolean,
        ammontare: Number,
        data: Date,
        descrizione: String
    }]
})

const mensilitaModel = mongoose.model('mensilita', mensilita)

module.exports = mensilitaModel


