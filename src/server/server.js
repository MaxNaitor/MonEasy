const express = require('express')
const { body, validationResult } = require('express-validator')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
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