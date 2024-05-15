import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["The email already exist"]);

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    // Configura la cookie con las opciones adecuadas
    res.cookie("token", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 día
      httpOnly: true,
      secure: true, // Solo enviar sobre HTTPS
    });

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({
        message: "Incorrect password",
      });

    console.log("User logged in with ID:", userFound._id); // <-- Imprime el ID del usuario

    const token = await createAccessToken({ id: userFound._id });

    // Configura la cookie con las opciones adecuadas
    res.cookie("token", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 día
      httpOnly: true,
      secure: true, // Solo enviar sobre HTTPS
    });

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};

export const logout = (req, res) => {
  // Configura la cookie para que expire inmediatamente
  res.cookie("token", "", {
    expires: new Date(0),
    httpOnly: true,
    secure: true, // Solo enviar sobre HTTPS
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  // Obtén los datos del usuario desde el token
  const userFound = await User.findById(req.user.id);
  if (!userFound)
    return res.status(400).json({
      message: "User not Found!",
    });
  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No Autorizado" });
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (!token) return res.status(401).json({ message: "No Autorizado" });
    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No Autorizado" });
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
