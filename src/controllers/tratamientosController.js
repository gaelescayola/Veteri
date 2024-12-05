import tratamientosModel from "../models/tratamientosModel.js";

const {
    getAllTratamientos,
    getTratamientoById,
    addTratamiento,
    updateTratamiento,
    deleteTratamiento,
} = tratamientosModel;

// Listar todos los tratamientos
const getTratamientos = async (req, res) => {
    try {
        const tratamientos = await getAllTratamientos(); // Obtener todos los tratamientos
        res.render("tratamientos/index", { tratamientos }); // Renderizar la vista con los tratamientos
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los tratamientos");
    }
};

// Mostrar formulario para crear un tratamiento
const showCreateForm = (req, res) => {
    try {
        res.render("tratamientos/create"); // Renderizar formulario de creación
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al mostrar el formulario de creación");
    }
};

// Crear un tratamiento
const createTratamiento = async (req, res) => {
    try {
        await addTratamiento(req.body); // Agregar nuevo tratamiento
        res.redirect("/tratamientos"); // Redirigir a la lista de tratamientos
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al agregar el tratamiento");
    }
};

// Mostrar formulario para editar un tratamiento
const showEditForm = async (req, res) => {
    try {
        const tratamiento = await getTratamientoById(req.params.id); // Obtener tratamiento por ID
        res.render("tratamientos/edit", { tratamiento }); // Renderizar formulario de edición
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al mostrar el formulario de edición");
    }
};

// Actualizar un tratamiento
const editTratamiento = async (req, res) => {
    try {
        await updateTratamiento(req.params.id, req.body); // Actualizar tratamiento
        res.redirect("/tratamientos"); // Redirigir a la lista de tratamientos
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar el tratamiento");
    }
};

// Eliminar un tratamiento
const delete_tratamiento_id = async (req, res) => {
    try {
        await deleteTratamiento(req.params.id); // Eliminar tratamiento por ID
        res.redirect("/tratamientos"); // Redirigir a la lista de tratamientos
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el tratamiento");
    }
};

export default {
    getTratamientos,
    showCreateForm,
    createTratamiento,
    showEditForm,
    editTratamiento,
    delete_tratamiento_id,
};
