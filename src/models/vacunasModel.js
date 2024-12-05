import db from "../../db/database.js";

// Obtener todas las vacunas
const getAllVacunas = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM vacunas", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Obtener una vacuna por su ID
const getVacunaById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM vacunas WHERE id = ?", [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

// Agregar una nueva vacuna
const addVacuna = (vacuna) => {
    return new Promise((resolve, reject) => {
        const { nombre, descripcion, aplicacion, mascota_id } = vacuna;
        db.run(
            "INSERT INTO vacunas (nombre, descripcion, aplicacion, mascota_id) VALUES (?, ?, ?, ?)",
            [nombre, descripcion, aplicacion, mascota_id],
            function (err) {
                if (err) reject(err);
                resolve(this.lastID);
            }
        );
    });
};

// Actualizar una vacuna existente
const updateVacuna = (id, vacuna) => {
    return new Promise((resolve, reject) => {
        const { nombre, descripcion, aplicacion, mascota_id } = vacuna;
        db.run(
            "UPDATE vacunas SET nombre = ?, descripcion = ?, aplicacion = ?, mascota_id = ? WHERE id = ?",
            [nombre, descripcion, aplicacion, mascota_id, id],
            function (err) {
                if (err) reject(err);
                resolve(this.changes);
            }
        );
    });
};

// Eliminar una vacuna
const deleteVacuna = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM vacunas WHERE id = ?", [id], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

export default { getAllVacunas, getVacunaById, addVacuna, updateVacuna, deleteVacuna };
