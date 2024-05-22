import Profesor from "../models/profesor.model";

export const getAllProfesores = async (req, res) => {
    try {
        const profesores = await Profesor.find();
        console.log('Profesores encontrados:', profesores); // Añadir log aquí
        res.json(profesores);
    } catch (error) {
        console.log('Error al obtener los profesores:', error); // Añadir log aquí
        res.status(500).json({ message: error.message });
    }
};
