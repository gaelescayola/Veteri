import db from "../../db/database.js";

const getDashboardData = () => {
    return new Promise((resolve, reject) => {
        db.all(
            `
            SELECT 
                citas.id AS cita_id,
                mascotas.nombre AS mascota_nombre,
                clientes.nombre AS cliente_nombre,
                citas.fecha AS cita_fecha,
                empleados.nombre AS empleado_nombre,
                servicios.nombre AS servicio_nombre
            FROM citas
            JOIN mascotas ON citas.mascota_id = mascotas.id
            JOIN clientes ON mascotas.cliente_id = clientes.id
            JOIN empleados ON citas.empleado_id = empleados.id
            JOIN servicios ON citas.servicio_id = servicios.id
            ORDER BY citas.fecha
            `,
            [],
            (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            }
        );
    });
};

export default { getDashboardData };
