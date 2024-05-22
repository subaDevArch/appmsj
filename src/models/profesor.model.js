import mongoose from "mongoose";

const ProfesorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
});

export default mongoose.model('Profesor',ProfesorSchema);