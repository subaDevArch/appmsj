import express from "express";
import multer from "multer";
import { enviarCorreo } from "../controllers/sendmsj.controller.js";

const router = express.Router();

// Configuración de multer para guardar los archivos en la carpeta 'uploads'
const upload = multer({ dest: 'uploads/' });

// Ruta para enviar un correo con un archivo adjunto
router.post("/enviado", upload.single('archivo'), enviarCorreo);

export default router;
