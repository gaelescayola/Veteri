import db from "../../db/database.js";

// Obtener todos los servicios
const getAllServicios = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM servicios", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Obtener un servicio por su ID
const getServicioById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM servicios WHERE id = ?", [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

// Agregar un nuevo servicio
const addServicio = (servicio) => {
    return new Promise((resolve, reject) => {
        const { nombre, descripcion, precio } = servicio;
        db.run(
            "INSERT INTO servicios (nombre, descripcion, precio) VALUES (?, ?, ?)",
            [nombre, descripcion, precio],
            function (err) {
                if (err) reject(err);
                resolve(this.lastID);
            }
        );
    });
};

// Actualizar un servicio existente
const updateServicio = (id, servicio) => {
    return new Promise((resolve, reject) => {
        const { nombre, descripcion, precio } = servicio;
        db.run(
            "UPDATE servicios SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?",
            [nombre, descripcion, precio, id],
            function (err) {
                if (err) reject(err);
                resolve(this.changes);
            }
        );
    });
};

// Eliminar un servicio
const deleteServicio = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM servicios WHERE id = ?", [id], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

export default { getAllServicios, getServicioById, addServicio, updateServicio, deleteServicio };
