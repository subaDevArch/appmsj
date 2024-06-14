import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config({path:'src/env/.env'});

export const connectDB = async () => {
    try {
        
        await mongoose.connect(process.env.DB_URI)
        console.log('---DB IS CONECTED---')
    } catch (error) {
        console.log(error);
    }

};
//mongodb://localhost/merndb

