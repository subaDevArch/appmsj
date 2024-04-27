import { Router } from "express";
import express from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { enviarCorreo } from "../controllers/sendmsj.controller.js";

const router = express.Router();

// Ruta para enviar un correo
router.post("/enviado",  enviarCorreo);

export default router;
