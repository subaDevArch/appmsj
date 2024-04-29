import app from "./app.js";
import { connectDB } from './db.js';

// Llama a la función para conectar a la base de datos
connectDB();

// Usa el puerto definido por la variable de entorno PORT o el puerto 3000 como alternativa
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});