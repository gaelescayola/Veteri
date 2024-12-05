import express from "express";
import mascotasController from "../controllers/mascotasController.js";

const router = express.Router();

// Listar todas las mascotas
router.get("/", mascotasController.getMascotas);

// Mostrar formulario para crear una mascota
router.get("/create", mascotasController.showCreateForm);

// Crear una mascota
router.post("/create", mascotasController.createMascota);

// Mostrar formulario para editar una mascota
router.get("/edit/:id", mascotasController.showEditForm);

// Actualizar una mascota
router.post("/edit/:id", mascotasController.editMascota);

// Eliminar una mascota
router.get("/delete/:id", mascotasController.deleteMascota);

export default router;
