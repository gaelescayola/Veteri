import db from "../../db/database.js";

// Obtener todas las citas
const getAllCitas = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM citas", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Obtener una cita por su ID
const getCitaById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM citas WHERE id = ?", [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

// Agregar una nueva cita
const addCita = (cita) => {
    return new Promise((resolve, reject) => {
        const { mascota_id, fecha, motivo } = cita;
        db.run(
            "INSERT INTO citas (mascota_id, fecha, motivo) VALUES (?, ?, ?)",
            [mascota_id, fecha, motivo],
            function (err) {
                if (err) reject(err);
                resolve(this.lastID);
            }
        );
    });
};

// Actualizar una cita existente
const updateCita = (id, cita) => {
    return new Promise((resolve, reject) => {
        const { mascota_id, fecha, motivo } = cita;
        db.run(
            "UPDATE citas SET mascota_id = ?, fecha = ?, motivo = ? WHERE id = ?",
            [mascota_id, fecha, motivo, id],
            function (err) {
                if (err) reject(err);
                resolve(this.changes);
            }
        );
    });
};

// Eliminar una cita
const deleteCita = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM citas WHERE id = ?", [id], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

export default { getAllCitas, getCitaById, addCita, updateCita, deleteCita };
