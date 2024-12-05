import citasModel from "../models/citasModel.js";

// Obtener todas las citas
const getCitas = async (req, res) => {
    try {
        const citas = await citasModel.getAllCitas(); // Llama al modelo para obtener todas las citas
        res.render("citas/index", { citas }); // Renderiza la vista con las citas obtenidas
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener las citas");
    }
};

// Mostrar formulario para crear una cita
const showCreateForm = (req, res) => {
    try {
        res.render("citas/create"); // Renderiza la vista para crear una nueva cita
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al cargar el formulario de creación");
    }
};

// Crear una cita
const createCita = async (req, res) => {
    try {
        await citasModel.addCita(req.body); // Llama al modelo para agregar la cita
        res.redirect("/citas"); // Redirige a la lista de citas después de la creación
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al agregar la cita");
    }
};

// Mostrar formulario para editar una cita
const edit_view_cita = async (req, res) => {
    try {
        const cita = await citasModel.getCitaById(req.params.id); // Llama al modelo para obtener la cita por su ID
        res.render("citas/edit", { cita }); // Renderiza la vista de edición con los datos de la cita
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al cargar el formulario de edición");
    }
};

// Actualizar una cita
const edit_cita_post = async (req, res) => {
    try {
        await citasModel.updateCita(req.params.id, req.body); // Llama al modelo para actualizar la cita
        res.redirect("/citas"); // Redirige a la lista de citas después de la actualización
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar la cita");
    }
};

// Eliminar una cita
const delete_cita_id = async (req, res) => {
    try {
        await citasModel.deleteCita(req.params.id); // Llama al modelo para eliminar la cita por su ID
        res.redirect("/citas"); // Redirige a la lista de citas después de la eliminación
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar la cita");
    }
};

export default {
    getCitas,
    showCreateForm,
    createCita,
    edit_view_cita,
    edit_cita_post,
    delete_cita_id,
};
