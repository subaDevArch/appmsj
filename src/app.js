import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from './src/entry-server.js';

// Importaciones de rutas
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';
import alumnosRoutes from './routes/alumnos.routes.js';
import sendmsj from './routes/sendmsj.routes.js';

// Importación de función para conectar a la base de datos
dotenv.config();

// Configuración de Express
const app = express();
const origins = ["https://frontappmsj.onrender.com", "http://localhost:5173"];

// Middleware para permitir solicitudes CORS desde el origen especificado
app.use(cors({
  origin: origins,
  credentials: true
}));

// Middleware para registro de solicitudes HTTP en el modo de desarrollo
app.use(morgan('dev'));

// Middleware para analizar cuerpos de solicitudes JSON
app.use(express.json());

// Middleware para analizar cookies de las solicitudes
app.use(cookieParser());

// Definición de rutas API
app.use('/api', authRoutes);
app.use('/api', taskRoutes);
app.use('/api', alumnosRoutes);
app.use('/api', sendmsj);

// Configuración de SSR
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/*', (req, res) => {
  const context = {};
  const appHTML = render(req.url, context);

  fs.readFile(path.resolve(__dirname, 'dist', 'index.html'), 'utf-8', (err, htmlData) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return res.status(500).send('Internal Server Error');
    }

    const html = htmlData.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);
    res.send(html);
  });
});

export default app;
