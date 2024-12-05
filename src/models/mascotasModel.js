import db from "../../db/database.js";

// Obtener todas las mascotas
const getAllMascotas = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM mascotas", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Obtener una mascota por su ID
const getMascotaById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM mascotas WHERE id = ?", [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

// Agregar una nueva mascota
const addMascota = (mascota) => {
    return new Promise((resolve, reject) => {
        const { nombre, especie, raza, edad, dueño, telefono, cliente_id } = mascota;
        db.run(
            "INSERT INTO mascotas (nombre, especie, raza, edad, dueño, telefono, cliente_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [nombre, especie, raza, edad, dueño, telefono, cliente_id],
            function (err) {
                if (err) reject(err);
                resolve(this.lastID);
            }
        );
    });
};

// Actualizar una mascota existente
const updateMascota = (id, mascota) => {
    return new Promise((resolve, reject) => {
        const { nombre, especie, raza, edad, dueño, telefono, cliente_id } = mascota;
        db.run(
            "UPDATE mascotas SET nombre = ?, especie = ?, raza = ?, edad = ?, dueño = ?, telefono = ?, cliente_id = ? WHERE id = ?",
            [nombre, especie, raza, edad, dueño, telefono, cliente_id, id],
            function (err) {
                if (err) reject(err);
                resolve(this.changes);
            }
        );
    });
};

// Eliminar una mascota
const deleteMascota = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM mascotas WHERE id = ?", [id], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

export default { getAllMascotas, getMascotaById, addMascota, updateMascota, deleteMascota };
