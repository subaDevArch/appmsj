// Importaciones de módulos
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';

// Importaciones de rutas
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js";
import sendmsj from "./routes/sendmsj.routes.js";

// Importación de función para conectar a la base de datos
import { connectDB } from './db.js';

// Configuración de Express
const app = express();

// Middleware para permitir solicitudes CORS desde el origen especificado
app.use(
  cors({
    //origin: "http://localhost:5173",
    origin: "https://frontappmsj.onrender.com",
    credentials:true
  })
);

// Configuración de la base de datos y conexión
connectDB();

// Asignación del puerto definido por la variable de entorno PORT o el puerto 3000 como alternativa
const port = process.env.PORT || 3000;

// Inicio del servidor Express
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Configuración de variables de entorno
dotenv.config();

// Middleware para registro de solicitudes HTTP en el modo de desarrollo
app.use(morgan("dev"));

// Middleware para analizar cuerpos de solicitudes JSON
app.use(express.json());

// Middleware para analizar cookies de las solicitudes
app.use(cookieParser());

// Definición de rutas
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", alumnosRoutes);
app.use("/api", sendmsj);

// Exportación del objeto de la aplicación Express
export default app;
