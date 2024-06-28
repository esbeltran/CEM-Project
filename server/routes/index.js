import { Router } from "express";
import auth from "./authRoute.js";
import health from "./healthCheckRoute.js";
import dashboard from "./dashboardRoute.js";

const router = Router();

router.use("/auth", auth);
router.use("/health", health);
router.use("/dashboard", dashboard);

export default router;
