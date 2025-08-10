import express from 'express'
import { configDotenv } from 'dotenv'
import connectDB from './services/connectDB.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.js'
import blogRouter from './routes/blog.js'

const app = express()
configDotenv()

//CONNECT_DB
connectDB(process.env.MONGO_URI)

//MIDDLEWARES
app.use(express.json())//Parses JSON 
app.use(express.urlencoded({extended:false}))//Handles FormData
app.use(cookieParser()) //Parses Cookies

//ROUTES
app.use('/user', userRouter)
app.use('/', blogRouter)


//START_SERVER
const PORT = process.env.port || 5000
app.listen(PORT, ()=>{
    console.log(`Server Started At Port ${PORT}`)
})