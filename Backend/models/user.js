import { Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    salt:{
        type:String
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER"
    },
    ProfileImageURL:{
        type:String,
        required:true,
        default:"/default.png"
    }
    
}, { timestamps:true })

userSchema.pre('save', async function(next){
    const user = this
    if(!user.isModified('password')) 
        return next()
    
    //Generate Unique Salt
    const salt = await bcrypt.genSalt(10)
    user.salt = salt
    //Generate Hashed Password 
    user.password = await bcrypt.hash(user.password + process.env.PEPPER, salt)

    next()
})

//Compare Password
userSchema.methods.comparePassword = async function(plainPassword){
    return bcrypt.compare(plainPassword + process.env.PEPPER, this.password)
}


const USER = model('user',userSchema)
export default USER