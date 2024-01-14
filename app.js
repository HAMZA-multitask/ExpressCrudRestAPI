import express from 'express'
import connectDB from "./db/connectdb.js"
import web from "./routes/web.js"
const app = express()
const port = process.env.PORT || '3000'
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";


// Database Connection
connectDB(DATABASE_URL)

// Json
app.use(express.json())

app.use("/student", web)

app.listen(port, () =>{
 console.log(`Server listening at http://localhost:${port}`)
})