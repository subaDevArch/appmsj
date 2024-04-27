const { z } = require('zod');

const alumnoSchema = z.object({
  Apellido: z.string(),
  Nombre: z.string(),
  Curso: z.string()
});


