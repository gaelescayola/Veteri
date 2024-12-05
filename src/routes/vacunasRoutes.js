import express from "express";
import vacunasController from "../controllers/vacunasController.js";

const router = express.Router();

// Listar todas las vacunas
router.get("/", vacunasController.getVacunas);

// Mostrar formulario para crear una vacuna
router.get("/create", vacunasController.showCreateForm);

// Crear una vacuna
router.post("/create", vacunasController.createVacuna);

// Mostrar formulario para editar una vacuna
router.get("/edit/:id", vacunasController.showEditForm);

// Actualizar una vacuna
router.post("/edit/:id", vacunasController.editVacuna);

// Eliminar una vacuna
router.get("/delete/:id", vacunasController.deleteVacuna);

export default router;
