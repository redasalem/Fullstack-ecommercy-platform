import mongoos from "mongoose";
import { ENV } from "./env.js";


export const connectDB = async ()=>{
    try{
     const connection =  await mongoos.connect(ENV.DB_URL)
     console.log(`✅ mangooes connected to ${connection.connection.host}`)

    }
    catch(error){
        console.error(`mangooeDb Connection ${error.message}`)
        process.exit(1)
    }
}
