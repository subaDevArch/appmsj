import Alumno from '../models/alumno.model.js'

export const getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

