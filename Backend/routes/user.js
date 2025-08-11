import express from 'express'
import USER from '../models/user.js'
import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
import authRequired from '../middlewares/authRequired.js'
configDotenv()
const router = express.Router()



//SIGNUP
router.post('/signup', async (req, res)=>{
    const { name, email, password, profileImageURL } = req.body
    const alreadyExists = await USER.findOne({email})
    console.log(alreadyExists)
    if(alreadyExists){
        return res.status(400).json({error:"User Already Exists!"})
    }
    const newUser = await new USER({
        name,
        email,
        password
    })
    await newUser
    .save()
    .then(()=>res.status(200).json({message:"User Created Successfully"}))
    .catch((error)=> console.log("Error Signing Up!"))
})

//SIGNIN
router.post('/signin', async (req,res)=>{
    try{
        const { email, password } = req.body
        const user = await USER.findOne({email})
        //Verify User
        if(!user) return res.status(400).json({error:"Invalid Credentials!"})
        //Verify Password
        const isMatched = await user.comparePassword(password)
        if(!isMatched) return res.status(400).json({error:"Invalid Credentials!"})
        //Generate Token
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
        res.cookie('token',token)
        res.status(200).json({message:"Signed In Successfully!"})
    }catch(error){
        console.log(error)
    }
})

//SIGNOUT
router.post('/signout', async (req, res)=>{
    res.clearCookie('token')
    return res.json({message:"Logged Out Successfully"})
})

//CHECK-AUTH
router.get('/check-auth', authRequired, async (req, res)=>{
    const user = req.user? req.user : null
    if(!user)
        return res.status(401).json({error:"Login Required!"})
    res.status(200).json(user)
})

const userRouter = router
export default userRouter