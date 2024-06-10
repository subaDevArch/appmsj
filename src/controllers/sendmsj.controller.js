/*import nodemailer from "nodemailer";

// Controlador para enviar un correo

export const enviarCorreo = async (req, res) => {
  const { email, subject, mensaje } = req.body; // Cambiado de 'asunto' a 'subject'
  console.log("Datos recibidos:", email, subject, mensaje);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: subject, // Cambiado de 'asunto' a 'subject'
      text: mensaje,
    };

    // Utiliza await para esperar a que sendMail() termine antes de continuar
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent" + info.response);
    res.status(201).json({ status: 201, info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: "Error al enviar el correo" });
  }
};*/

import nodemailer from 'nodemailer';
import multer from 'multer';
import express from 'express';
import fs from 'fs';
import path from 'path';

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });



// Controlador para enviar un correo
export const enviarCorreo = async (req, res) => {
  const { email, subject, mensaje } = req.body;
  const archivo = req.file;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      text: mensaje,
      attachments: archivo ? [
        {
          filename: archivo.originalname,
          path: archivo.path,
        },
      ] : [],
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent: ' + info.response);

    if (archivo) {
      fs.unlink(archivo.path, (err) => {
        if (err) {
          console.error('Error al eliminar el archivo temporal:', err);
        }
      });
    }

    res.status(201).json({ status: 201, info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: 'Error al enviar el correo' });
  }
};

app.post('/enviado', upload.single('file'), enviarCorreo);



