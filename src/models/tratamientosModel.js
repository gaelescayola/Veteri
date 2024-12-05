import db from "../../db/database.js";

// Obtener todos los tratamientos
const getAllTratamientos = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM tratamientos", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Obtener un tratamiento por su ID
const getTratamientoById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM tratamientos WHERE id = ?", [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

// Agregar un nuevo tratamiento
const addTratamiento = (tratamiento) => {
    return new Promise((resolve, reject) => {
        const { mascota_id, descripcion, fecha_inicio, fecha_fin } = tratamiento;
        db.run(
            "INSERT INTO tratamientos (mascota_id, descripcion, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?)",
            [mascota_id, descripcion, fecha_inicio, fecha_fin],
            function (err) {
                if (err) reject(err);
                resolve(this.lastID);
            }
        );
    });
};

// Actualizar un tratamiento existente
const updateTratamiento = (id, tratamiento) => {
    return new Promise((resolve, reject) => {
        const { mascota_id, descripcion, fecha_inicio, fecha_fin } = tratamiento;
        db.run(
            "UPDATE tratamientos SET mascota_id = ?, descripcion = ?, fecha_inicio = ?, fecha_fin = ? WHERE id = ?",
            [mascota_id, descripcion, fecha_inicio, fecha_fin, id],
            function (err) {
                if (err) reject(err);
                resolve(this.changes);
            }
        );
    });
};

// Eliminar un tratamiento
const deleteTratamiento = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM tratamientos WHERE id = ?", [id], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

export default { getAllTratamientos, getTratamientoById, addTratamiento, updateTratamiento, deleteTratamiento };
