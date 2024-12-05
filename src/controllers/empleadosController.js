import empleadosModel from "../models/empleadosModel.js";

const { addEmpleado, deleteEmpleado, getAllEmpleados, getEmpleadoById, updateEmpleado } = empleadosModel;

// Listar todos los empleados
const getEmpleados = async (req, res) => {
    try {
        const empleados = await getAllEmpleados(); // Obtener todos los empleados
        res.render("empleados/index", { empleados }); // Renderizar la vista con los empleados
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los empleados");
    }
};

// Mostrar formulario para crear un empleado
const showCreateForm = ( res) => {
    try {
        res.render("empleados/create"); // Renderizar formulario de creación
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al mostrar el formulario de creación");
    }
};

// Crear un empleado
const createEmpleado = async (req, res) => {
    try {
        await addEmpleado(req.body); // Agregar nuevo empleado
        res.redirect("/empleados"); // Redirigir a la lista de empleados
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al agregar el empleado");
    }
};

// Mostrar formulario para editar un empleado
const showEditForm = async (req, res) => {
    try {
        const empleado = await getEmpleadoById(req.params.id); // Obtener empleado por ID
        res.render("empleados/edit", { empleado }); // Renderizar formulario de edición
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al mostrar el formulario de edición");
    }
};

// Actualizar un empleado
const edit_empleado_post = async (req, res) => {
    try {
        await updateEmpleado(req.params.id, req.body); // Actualizar empleado
        res.redirect("/empleados"); // Redirigir a la lista de empleados
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar el empleado");
    }
};

// Eliminar un empleado
const delete_empleado_id = async (req, res) => {
    try {
        await deleteEmpleado(req.params.id); // Eliminar empleado por ID
        res.redirect("/empleados"); // Redirigir a la lista de empleados
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el empleado");
    }
};

export default {
    getEmpleados,
    showCreateForm,
    createEmpleado,
    showEditForm,
    edit_empleado_post,
    delete_empleado_id,
};
