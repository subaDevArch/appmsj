import { Router } from "express";
import {
  login,
  
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
const router = Router();
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema } from "../schemas/auth.schema.js"

router.post("/login",validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile",authRequired, profile);


export default router;
