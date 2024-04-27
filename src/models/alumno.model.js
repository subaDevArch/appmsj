import mongoose from 'mongoose';

const alumnoSchema = new mongoose.Schema(
  {
    Apellido: {
      type: String,
      required: true,
    },
    Nombre: {
      type: String,
      required: true,
    },
    Curso: {
      type: String,
      required: true,
    },
    // Puedes agregar más campos según tus necesidades
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Alumno', alumnoSchema);
