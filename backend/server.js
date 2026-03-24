import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

import  connectDb  from './config/db.js'
import router from './routes/airoutes.js'
import cors from 'cors'

const app =  express()

const PORT  =  process.env.PORT || 8080

app.use(cors())
app.use(express.json())
 
connectDb()
 app.use('/api',router)


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)

})