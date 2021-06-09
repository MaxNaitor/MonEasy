const express = require('express')
const { body, validationResult } = require('express-validator')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const urlDB = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.cldow.mongodb.net/MonEasy?retryWrites=true&w=majority'

app.use(cors())

app.use(bodyParser.json())

mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true })

const utenteSchema = {
    ciao: String
}

const utenteModel = mongoose.model('utente',utenteSchema)

const db = mongoose.connection;

db.once('open', _ => {
    console.log('Database connected', urlDB);
});

db.on('error', _ => {
    console.error('connection error:', err);
});

app.listen(3000, () => {
    console.log('Ascolto su porta 3000')
})