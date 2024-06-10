import nodemailer from "nodemailer";
import multer from "multer";



// Controlador para enviar un correo

export const enviarCorreo = async (req, res) => {

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, path.join(__dirname, "file_emails"));
  },
  filename: (req,file,cb) =>{
    cb(null,file.originalname);
  },
});

const upload = multer ({storage: storage});

  const { email, subject, mensaje } = req.body; // Cambiado de 'asunto' a 'subject'
  console.log("Datos recibidos:", email, subject, mensaje);
  const fileAdjunto = req.file;

  

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
      attachments: attachments,
    };

    let attachments = [];
  if(fileAdjunto) {
     const filePath = ppath.join((__dirname, "file_emails",fileAdjunto.filename));

     attachments = [
      {
        filename: fileAdjunto.name,
        path:filePath,
      },
     ];
  }

    // Utiliza await para esperar a que sendMail() termine antes de continuar
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent" + info.response);
    res.status(201).json({ status: 201, info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: "Error al enviar el correo" });
  }
};





