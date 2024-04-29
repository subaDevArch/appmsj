import jwt from "jsonwebtoken";
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
};
