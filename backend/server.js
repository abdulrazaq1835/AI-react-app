import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import connectDb from './config/db.js'
import router from './routes/airoutes.js'
import cors from 'cors'

const app = express()

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

connectDb()
app.use('/api', router)
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})

export default app