import dotenv from 'dotenv';
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js";
import sendmsj from "./routes/sendmsj.routes.js";

const app = express();
app.use(
  cors({
    //origin: "http://localhost:5173",
    origin: "https://frontappmsj.onrender.com",
    credentials:true
  })
);
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", alumnosRoutes);
app.use("/api", sendmsj);

export default app;
