const express = require('express')
const { body, validationResult } = require('express-validator')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var MD5 = require("crypto-js/md5");

// models
const utenteModel = require('../server/models/utenteModel')
const mensilitaModel = require('./models/mensilitaModel')

const app = express()
app.use(cors())
app.use(bodyParser.json())



const urlDB = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.cldow.mongodb.net/MonEasy?retryWrites=true&w=majority'
mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true })
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

app.post(
    '/api/registrazione',
    (req, res) => {
        let utente = req.body
        utenteModel.find({ username: utente.username }).then(utentiSuDb => {
            if (utentiSuDb.length == 0) {
                utente = new utenteModel({
                    username: utente.username,
                    password: MD5(utente.password).toString()
                })
                utente.save().then(() => {
                    utenteModel.find({ username: utente.username }).then(utenteRegistrato => {
                        return res.status(200).send(utenteRegistrato)
                    })
                })
            } else {
                return res.status(400).send('Username già registrato')
            }
        })

    }
)

app.post(
    '/api/accesso',
    (req, res) => {
        let utente = req.body;
        utenteModel.find({ username: utente.username, password: MD5(utente.password).toString() }).then(utenteLogin => {
            if (utenteLogin.length == 0) {
                return res.status(400).send('Credenziali errate!')
            } else {
                return res.status(200).send(utenteLogin)
            }
        })
    }
)

