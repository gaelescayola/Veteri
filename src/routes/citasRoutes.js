import express from "express";
import citasController from "../controllers/citasController.js";

const router = express.Router();

// Listar todas las citas
router.get("/", citasController.getCitas);

// Mostrar formulario para crear una cita
router.get("/create", citasController.showCreateForm);

// Crear una cita
router.post("/create", citasController.createCita);

// Mostrar formulario para editar una cita
router.get("/edit/:id", citasController.edit_view_cita);

// Actualizar una cita
router.post("/edit/:id", citasController.edit_cita_post);

// Eliminar una cita
router.get("/delete/:id", citasController.delete_cita_id);

export default router;



