import { Schema, model } from "mongoose"
import USER from "./user.js"
const blogSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    body:{
        type:String,
        required:true
    },
    coverImageURL:{
        type:String,
        reuired:true
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:USER,
        required:true
    }
}, { timestamps: true })

const BLOG = model('blog', blogSchema)
export default BLOG