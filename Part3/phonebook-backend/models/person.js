const mongoose = require("mongoose")

// const password = process.argv[2]
// const url = `mongodb+srv://ragadag62_db_user:${password}@cluster0.t7ysymh.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set("strictQuery", false)

const url = process.env.MONGODB_URI
console.log("connecting to", url)

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB")
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model("Person", personSchema)
