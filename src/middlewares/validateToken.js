/*import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res.status(401).json({
        message: "No token!, Acceso denegado!",
      });

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error)
        return res.status(401).json({
          message: "Invalid Token",
        });
      req.user = user;
      next(); // Llama a next() aquí para continuar con el siguiente middleware o controlador
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};*/

import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      console.log("No se recibió ningún token en la solicitud");
      return res.status(401).json({
        message: "No token!, Acceso denegado!",
      });
    }

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error) {
        console.error("Error al verificar el token:", error.message);
        return res.status(401).json({
          message: "Invalid Token",
        });
      }
      req.user = user;
      console.log("Token verificado correctamente. Usuario:", user);
      next(); // Llama a next() aquí para continuar con el siguiente middleware o controlador
    });
  } catch (error) {
    console.error("Error en el middleware authRequired:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

