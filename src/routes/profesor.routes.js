import {Router} from 'express';
import { getAllProfesores } from '../controllers/profesor.controller';

const router = Router();

router.get('/profesores', getAllProfesores);

export default router;