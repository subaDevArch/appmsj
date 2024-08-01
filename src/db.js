import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config({path:'/home/idecom/app/src/env/.env'});

export const connectDB = async () => {
    try {
        
        await mongoose.connect("mongodb://localhost:27017/merndb")
        console.log('---DB IS CONECTED---')
    } catch (error) {
        console.log(error);
    }

};
//mongodb://localhost/merndb

