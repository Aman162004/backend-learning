// db/index.js
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error){
        console.log("MongoDB connection error:", error);
        // REMOVE THIS LINE:
        // process.exit(1)
        throw error; // Propagate the error to the .catch in index.js
    }
}

export default connectDB