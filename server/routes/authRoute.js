import { Router } from "express";
import validateInfo from "../middleware/validinfo.js";
import authorization from "../middleware/authorization.js";

import { register, verify, login } from "../controllers/authControllers.js";

const router = Router();

router.post("/register", validateInfo, register);
router.post("/login", validateInfo, login);
router.get("/verify", authorization, verify);

export default router;
