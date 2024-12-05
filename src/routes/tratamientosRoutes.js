import express from "express";
import tratamientosController from "../controllers/tratamientosController.js";

const router = express.Router();

// Listar todos los tratamientos
router.get("/", tratamientosController.getTratamientos);

// Mostrar formulario para crear un tratamiento
router.get("/create", tratamientosController.showCreateForm);

// Crear un tratamiento
router.post("/create", tratamientosController.createTratamiento);

// Mostrar formulario para editar un tratamiento
router.get("/edit/:id", tratamientosController.showEditForm);

// Actualizar un tratamiento
router.post("/edit/:id", tratamientosController.getTratamientos);

// Eliminar un tratamiento
router.get("/delete/:id", tratamientosController.delete_tratamiento_id);

export default router;
