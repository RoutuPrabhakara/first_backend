const express = require('express');
const mongoose = require('mongoose')
const mycors = require('cors');
const bodyParser = require('body-parser')

const PORT = 3200;
const app  = express()


mongoose.connect('mongodb+srv://Routu_Prabhakara:jowkala@cluster0.j3ww551.mongodb.net/', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const database = mongoose.connection;
database.on('error', (error)=>{
    console.log('error on mongoose connction')
})

database.once('open', ()=>{
    console.log('mongo database is connected')
})

//middlewares
app.use(bodyParser.json())
app.use('/api', require('./routes/userRoute'))
app.use(mycors())


app.listen(PORT, ()=>{
    console.log('server is started')
})







