import express from "express";
import serviciosController from "../controllers/serviciosController.js";

const router = express.Router();

// Listar todos los servicios
router.get("/", serviciosController.getServicios);

// Mostrar formulario para crear un servicio
router.get("/create", serviciosController.showCreateForm);

// Crear un servicio
router.post("/create", serviciosController.createServicio);

// Mostrar formulario para editar un servicio
router.get("/edit/:id", serviciosController.showEditForm);

// Actualizar un servicio
router.post("/edit/:id", serviciosController.editServicio);

// Eliminar un servicio
router.get("/delete/:id", serviciosController.deleteServicio);

export default router;
