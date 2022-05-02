const router = require('express').Router()

const Person = require('../models/Person')


// rota de post
router.post('/', async (req, res) => {
    const { name, salary, approved } = req.body

    if(!name){
        res.status(422).json({error: "O nome é obrigatório!"})
    }

    const person = {
      name,
      salary,
      approved,
    }

    try {
      await Person.create(person)

      res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

module.exports = router