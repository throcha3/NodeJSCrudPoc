require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apinodejs.wdfgf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))

//porta 3000

//rota ini
app.get('/', (req,res) =>{

    res.json({message: 'Oi, Express!'})

})
