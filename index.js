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

const DB_USER = 'throcha3333'
const DB_PASSWORD = encodeURIComponent('az3SB5tFDcMylghO')

mongoose
  .connect(
    'mongodb+srv://throcha3333:az3SB5tFDcMylghO@apinodejs.wdfgf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
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
