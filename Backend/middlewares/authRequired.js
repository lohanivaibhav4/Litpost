import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()

export default async function authRequired(req, res, next){
    const token = req.cookies?.token
    if(!token){
        return res.json({error:"Login Required!"})
    }
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    next()    
}