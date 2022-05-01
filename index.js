const express = require('express')
const app = express()

//forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//porta
app.listen(3000)

//rota ini
app.get('/', (req,res) =>{

    res.json({message: 'Oi, Express!'})

})

