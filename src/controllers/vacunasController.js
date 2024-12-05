import vacunasModel from "../models/vacunasModel.js";

const {
    getAllVacunas,
    getVacunaById,
    addVacuna,
    updateVacuna,
} = vacunasModel;

// Listar todas las vacunas
const getVacunas = async (req, res) => {
    try {
        const vacunas = await getAllVacunas(); // Obtener todas las vacunas
        res.render("vacunas/index", { vacunas }); // Renderizar la vista con las vacunas
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener las vacunas");
    }
};

// Mostrar formulario para crear una vacuna
const showCreateForm = (req, res) => {
    try {
        res.render("vacunas/create"); // Renderizar formulario de creación
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al mostrar el formulario de creación");
    }
};

// Crear una vacuna
const createVacuna = async (req, res) => {
    try {
        await addVacuna(req.body); // Agregar nueva vacuna
        res.redirect("/vacunas"); // Redirigir a la lista de vacunas
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al agregar la vacuna");
    }
};

// Mostrar formulario para editar una vacuna
const showEditForm = async (req, res) => {
    try {
        const vacuna = await getVacunaById(req.params.id); // Obtener vacuna por ID
        res.render("vacunas/edit", { vacuna }); // Renderizar formulario de edición
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al mostrar el formulario de edición");
    }
};

// Actualizar una vacuna
const editVacuna = async (req, res) => {
    try {
        await updateVacuna(req.params.id, req.body); // Actualizar vacuna
        res.redirect("/vacunas"); // Redirigir a la lista de vacunas
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar la vacuna");
    }
};

// Eliminar una vacuna
const deleteVacuna = async (req, res) => {
    try {
        await deleteVacuna(req.params.id); // Eliminar vacuna por ID
        res.redirect("/vacunas"); // Redirigir a la lista de vacunas
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar la vacuna");
    }
};

export default {
    getVacunas,
    showCreateForm,
    createVacuna,
    showEditForm,
    editVacuna,
    deleteVacuna,
};
