import express from "express";
import empleadosController from "../controllers/empleadosController.js";

const router = express.Router();

// Listar todos los empleados
router.get("/", empleadosController.getEmpleados);

// Mostrar formulario para crear un empleado
router.get("/create", empleadosController.showCreateForm);

// Crear un empleado
router.post("/create", empleadosController.createEmpleado);

// Mostrar formulario para editar un empleado
router.get("/edit/:id", empleadosController.showEditForm);

// Actualizar un empleado
router.post("/edit/:id", empleadosController.edit_empleado_post);

// Eliminar un empleado
router.get("/delete/:id", empleadosController.delete_empleado_id);

export default router;
