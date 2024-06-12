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
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
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
    };

    // Utiliza await para esperar a que sendMail() termine antes de continuar
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: " + info.response);
    res.status(201).json({ status: 201, info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: "Error al enviar el correo" });
  }
};




