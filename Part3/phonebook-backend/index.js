
require('dotenv').config()
const express = require("express")
const app = express()
const morgan = require('morgan')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
const Person = require('./models/person')

morgan.token('body',(req,res)=>{
  if(req.method==='POST'){
    return JSON.stringify(req.body)
  }else{
    return ''
  }
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


//------------Routes----------------

app.get("/info", (req, res) => {  
  Person.countDocuments({})
    .then(count => {
      const info = `Phonebook has info for ${count} people`
      const date = new Date()
      res.send(`${info}<br><br>${date}`)
    })
    .catch(error => {
      console.log(error)
      res.status(500).send({ error: 'internal server error' })
    }) 
})   


app.get("/api/persons", (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
    .catch(error => {
      console.log(error)
      res.status(500).send({ error: 'internal server error' })
    })
})

app.get("/api/persons/:id", (req, res) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      res.status(400).send({ error: 'wrong id' })
    })
})

app.delete("/api/persons/:id", (req, res) => {
  Person.findByIdAndDelete(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => {
      console.log(error)
      res.status(400).send({ error: 'wrong   id' })
    })
})
  


app.post("/api/persons", (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({ error: "name or number is missing" })
  }

  Person.findOne({ name: body.name }).then(existingPerson => {
    if (existingPerson) {
      return res.status(400).json({ error: "name must be unique" })
    }

    const person = new Person({
      name: body.name,
      number: body.number,
    })

    person.save()
      .then(savedPerson => {
        console.log(`added ${savedPerson.name} to phonebook`)
        res.json(savedPerson) 
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'failed to save' })
      })
  })
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})  
