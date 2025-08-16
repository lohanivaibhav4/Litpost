import express from 'express'
import { configDotenv } from 'dotenv'
import connectDB from './services/connectDB.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.js'
import blogRouter from './routes/blog.js'
import { fileURLToPath } from "url";
import path from "path";


//CORS 
import cors from 'cors'
app.use(cors({
  origin: ['https://litpost-lohanivaibhav4s-projects.vercel.app/'],
  credentials: true
}));


const app = express()
configDotenv()

//CONNECT_DB
connectDB(process.env.MONGO_URI)

//MIDDLEWARES
app.use(express.json())//Parses JSON 
app.use(express.urlencoded({extended:false}))//Handles FormData
app.use(cookieParser()) //Parses Cookies

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//SERVE IMAGES
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

//ROUTES
app.use('/api/v1/user', userRouter)
app.use('/api/v1/', blogRouter)


//START_SERVER
const PORT = process.env.port || 5000
app.listen(PORT, ()=>{
    console.log(`Server Started At Port ${PORT}`)
})