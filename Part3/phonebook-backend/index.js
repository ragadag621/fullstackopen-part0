const express = require("express")
const app = express()
const morgan = require('morgan')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))


let persons = [
    {
      "id": "1",
      "name": "Arto Hellas",
      "number": "040123456"
    },
    {
      "id": "2",
      "name": "Ada Lovelace",
      "number": "045323523"
    },
    {
      "id": "3",
      "name": "Dan Abramov",
      "number": "032343457"
    },
    {
      "id": "4",
      "name": "Mary Pop",
      "number": "\t0521234897"
    },
    {
      "id": "5",
      "name": "Raghad Teacher",
      "number": "0521234567"
    },
    {
      "id": "6",
      "name": "Samira Tech",
      "number": "0549876543"
    },
    {
      "id": "7",
      "name": "Ahmad Software",
      "number": "0505554433"
    },
    {
      "id": "8",
      "name": "Noa Cohen",
      "number": "0532211000"
    },
    {
      "id": "9",
      "name": "Youssef Dev",
      "number": "0587778899"
    },
    {
      "id": "10",
      "name": "Maya Levi",
      "number": "0524400550"
    },
    {
      "id": "fde9",
      "name": "ahmad ali",
      "number": "05921344"
    }
]

morgan.token('body',(req,res)=>{
  if(req.method==='POST'){
    return JSON.stringify(req.body)
  }else{
    return ''
  }
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get("/info", (req, res) => {
  const count = persons.length
  const date = new Date()
  res.send(`
    <p>Phonebook has info for ${count} people</p>
    <p>${date}</p>
  `)
})

app.get("/api/persons", (req, res) => {
  res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id
  const person = persons.find((person) => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).send("not found")
  }
})

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id
  persons = persons.filter((person) => person.id !== id)
  res.status(204).end()
})

const generateId = () => {
  const ids = persons.map((n) => Number(n.id))
  const maxId = ids.length > 0 ? Math.max(...ids) : 0
  return String(maxId + 1)
}

app.post("/api/persons", (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({ 
      error: "name or number is missing" 
    })
  }

  const exists = persons.find(p => p.name === body.name)
  if (exists) {
    return res.status(400).json({ 
      error: "name must be unique" 
    })
  }

  const newperson = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  persons = persons.concat(newperson)
  res.json(newperson)
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
