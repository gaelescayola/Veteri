import db from "../../db/database.js";

// Obtener todos los empleados
const getAllEmpleados = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM empleados", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Obtener un empleado por su ID
const getEmpleadoById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM empleados WHERE id = ?", [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

// Agregar un nuevo empleado
const addEmpleado = (empleado) => {
    return new Promise((resolve, reject) => {
        const { nombre, puesto, telefono } = empleado;
        db.run(
            "INSERT INTO empleados (nombre, puesto, telefono) VALUES (?, ?, ?)",
            [nombre, puesto, telefono],
            function (err) {
                if (err) reject(err);
                resolve(this.lastID);
            }
        );
    });
};

// Actualizar un empleado existente
const updateEmpleado = (id, empleado) => {
    return new Promise((resolve, reject) => {
        const { nombre, puesto, telefono } = empleado;
        db.run(
            "UPDATE empleados SET nombre = ?, puesto = ?, telefono = ? WHERE id = ?",
            [nombre, puesto, telefono, id],
            function (err) {
                if (err) reject(err);
                resolve(this.changes);
            }
        );
    });
};

// Eliminar un empleado
const deleteEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM empleados WHERE id = ?", [id], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

export default { getAllEmpleados, getEmpleadoById, addEmpleado, updateEmpleado, deleteEmpleado };
