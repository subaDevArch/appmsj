const { z } = require('zod');

const profesorSchema = z.object({
  Apellido: z.string(),
  Nombre: z.string(),
  Materia: z.string()
});


