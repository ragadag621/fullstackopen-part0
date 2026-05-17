const mongoose = require("mongoose")

if (process.argv.length < 3) {
  console.log("give password as argument")
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://ragadag62_db_user:${password}@cluster0.t7ysymh.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set("strictQuery", false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model("Person", personSchema)

// const initialPersons = [
//     { name: "Arto Hellas", number: "040123456" },
//     { name: "Ada Lovelace", number: "045323523" },
//     { name: "Dan Abramov", number: "032343457" },
//     { name: "Mary Pop", number: "0521234897" },
//     { name: "Raghad Teacher", number: "0521234567" },
//     { name: "Samira Tech", number: "0549876543" },
//     { name: "Ahmad Software", number: "0505554433" },
//     { name: "Noa Cohen", number: "0532211000" },
//     { name: "Youssef Dev", number: "0587778899" },
//     { name: "Maya Levi", number: "0524400550" },
//     { name: "ahmad ali", number: "05921344" }
// ]

// Person.deleteMany({})
//   .then(() => {
//     return Person.insertMany(initialPersons)
//   })
// Person.insertMany(initialPersons)
//   .then(() => {
//     console.log('persons saved✅')
//     mongoose.connection.close()
//   })
//   .catch(err => {
//     console.log('erorr❌', err)
//     mongoose.connection.close()
//   })

if (process.argv.length === 3) {
  console.log("phonebook:")
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}
else if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })

  person.save().then(() => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}
