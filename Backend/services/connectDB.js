import mongoose from "mongoose";

export default async function connectDB(uri){
    mongoose
    .connect(uri)
    .then(()=>console.log("Database Connected"))
    .catch((error)=> console.log(error))
}