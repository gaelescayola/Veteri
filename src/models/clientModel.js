import db from "../../db/database.js";

// Obtener todos los clientes
const getAllClientes = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM clientes", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Obtener un cliente por su ID
const getClienteById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM clientes WHERE id = ?", [id], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
};

// Agregar un nuevo cliente
const addCliente = (cliente) => {
    return new Promise((resolve, reject) => {
        const { name, email, phone } = cliente;
        db.run(
            "INSERT INTO clientes (name, email, phone) VALUES (?, ?, ?)",
            [name, email, phone],
            function (err) {
                if (err) reject(err);
                resolve(this.lastID);
            }
        );
    });
};

// Actualizar un cliente existente
const updateCliente = (id, cliente) => {
    return new Promise((resolve, reject) => {
        const { name, email, phone } = cliente;
        db.run(
            "UPDATE clientes SET name = ?, email = ?, phone = ? WHERE id = ?",
            [name, email, phone, id],
            function (err) {
                if (err) reject(err);
                resolve(this.changes);
            }
        );
    });
};

// Eliminar un cliente
const deleteCliente = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM clientes WHERE id = ?", [id], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

export default { getAllClientes, getClienteById, addCliente, updateCliente, deleteCliente };
