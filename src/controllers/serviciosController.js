import serviciosModel from "../models/serviciosModel.js";


const { getAllServicios, getServicioById, addServicio, updateServicio } = serviciosModel;
// Listar todos los servicios
const getServicios = async (req, res) => {
    try {
        const servicios = await getAllServicios(); // Obtener todos los servicios
        res.render("servicios/index", { servicios }); // Renderizar la vista con los servicios
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los servicios");
    }
};

// Mostrar formulario para crear un servicio
const showCreateForm = (req, res) => {
    try {
        res.render("servicios/create"); // Renderizar formulario de creación
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al mostrar el formulario de creación");
    }
};

// Crear un servicio
const createServicio = async (req, res) => {
    try {
        await addServicio(req.body); // Agregar nuevo servicio
        res.redirect("/servicios"); // Redirigir a la lista de servicios
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al agregar el servicio");
    }
};

// Mostrar formulario para editar un servicio
const showEditForm = async (req, res) => {
    try {
        const servicio = await getServicioById(req.params.id); // Obtener servicio por ID
        res.render("servicios/edit", { servicio }); // Renderizar formulario de edición
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al mostrar el formulario de edición");
    }
};

// Actualizar un servicio
const editServicio = async (req, res) => {
    try {
        await updateServicio(req.params.id, req.body); // Actualizar servicio
        res.redirect("/servicios"); // Redirigir a la lista de servicios
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar el servicio");
    }
};

// Eliminar un servicio
const deleteServicio = async (req, res) => {
    try {
        await deleteServicio(req.params.id); // Eliminar servicio por ID
        res.redirect("/servicios"); // Redirigir a la lista de servicios
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el servicio");
    }
};

export default {
    getServicios,
    showCreateForm,
    createServicio,
    showEditForm,
    editServicio,
    deleteServicio,
};
