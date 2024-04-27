import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://peto:Peto34697936@cluster0.qp844en.mongodb.net/merndb')
        console.log('---DB IS CONECTED---')
    } catch (error) {
        console.log(error);
    }

};
//mongodb://localhost/merndb

//mongodb+srv://peto:Peto34697936@cluster0.qp844en.mongodb.net/