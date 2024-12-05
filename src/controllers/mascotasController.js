import mascotasModel from "../models/mascotasModel.js"; // Asegúrate de que el archivo sea correcto

const getMascotas = async (req, res) => {
    try {
        const mascotas = await mascotasModel.getAllMascotas(); // Obtener todas las mascotas
        res.render("mascotas/index", { mascotas }); // Renderizar la vista con las mascotas
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener las mascotas");
    }
};

const showCreateForm = (req, res) => {
    try {
        res.render("mascotas/create"); // Mostrar el formulario de creación
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al mostrar el formulario para agregar mascota");
    }
};

const createMascota = async (req, res) => {
    try {
        await mascotasModel.addMascota(req.body); // Agregar nueva mascota
        res.redirect("/mascotas"); // Redirigir a la lista de mascotas
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al agregar la mascota");
    }
};

const showEditForm = async (req, res) => {
    try {
        const mascota = await mascotasModel.getMascotaById(req.params.id); // Obtener mascota por ID
        res.render("mascotas/edit", { mascota }); // Mostrar el formulario de edición
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al cargar la mascota para edición");
    }
};

const editMascota = async (req, res) => {
    try {
        await mascotasModel.updateMascota(req.params.id, req.body); // Actualizar mascota
        res.redirect("/mascotas"); // Redirigir a la lista de mascotas
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar la mascota");
    }
};

const deleteMascota = async (req, res) => {
    try {
        await mascotasModel.deleteMascota(req.params.id); // Eliminar mascota por ID
        res.redirect("/mascotas"); // Redirigir a la lista de mascotas
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar la mascota");
    }
};

export default { getMascotas, showCreateForm, createMascota, showEditForm, editMascota, deleteMascota };
