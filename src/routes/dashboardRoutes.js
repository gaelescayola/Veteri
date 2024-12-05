import express from "express";
import dashboardController from "../controllers/dashboardController.js";

const router = express.Router();

// Mostrar el dashboard con información relevante (mascotas, citas, empleados, etc.)
router.get("/", dashboardController.showDashboard);

export default router;
