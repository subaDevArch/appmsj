import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getAllAlumnos} from '../controllers/alumno.controller.js';

const router = Router();

// Obtener todos los alumnos
router.get('/alumnos', getAllAlumnos);








export default router;

