// Importaciones de módulos
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

// Importaciones de rutas
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js";
import profesoresRoutes from "./routes/profesor.routes.js";
import sendmsj from "./routes/sendmsj.routes.js";

// Importación de función para conectar a la base de datos
dotenv.config();

// Configuración de Express
const app = express();
const origins = ["https://preceptor2-00.onrender.com", "http://localhost:5173"];
// Middleware para permitir solicitudes CORS desde el origen especificado
app.use(
  cors({
    //origin: "http://localhost:5173",
    origin: origins,
    credentials: true,
  })
);

//holis

// Configuración de variables de entorno

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
app.use("/api", profesoresRoutes);
app.use("/api", sendmsj);

// Exportación del objeto de la aplicación Express
export default app;
