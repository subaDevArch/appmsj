import nodemailer from "nodemailer";
import path from "path";

export const enviarCorreo = async (req, res) => {
  const { email, subject, mensaje } = req.body;
  const archivo = req.file; // Archivo subido por multer

  console.log("Datos recibidos:", email, subject, mensaje);
  if (archivo) {
    console.log("Archivo recibido:", archivo.originalname);
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "190.124.224.14",
      port: 25,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
ciphers: 'SSLv3',
        rejectUnauthorized: false // Permite conexiones a servidores que utilizan certificados no verificados
      }
    });

    const attachments = archivo ? [{
      filename: archivo.originalname,
      path: archivo.path,
      contentType: archivo.mimetype
    }] : [];

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      text: mensaje,
      attachments: attachments,
bcc: process.env.EMAIL
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: " + info.response);
    res.status(201).json({ status: 201, info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: "Error al enviar el correo" });
  }
};




