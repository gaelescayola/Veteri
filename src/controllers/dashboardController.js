import dashboardModel from "../models/dashboardModel.js"; // Asegúrate de que el modelo esté correctamente configurado

const showDashboard = async (req, res) => {
    try {
        // Obtener los datos del modelo (esto debería devolver un array con los datos relevantes)
        const dashboardData = await dashboardModel.getDashboardData();

        // Verificar que los datos existen y no están vacíos
        if (!dashboardData || dashboardData.length === 0) {
            return res.status(404).send("No se encontraron datos para mostrar en el dashboard.");
        }

        // Agrupar los datos por mascota
        const groupedData = dashboardData.reduce((acc, curr) => {
            // Verificar si el nombre de la mascota ya está en el acumulador
            if (!acc[curr.mascota_nombre]) {
                acc[curr.mascota_nombre] = [];
            }
            
            // Añadir los detalles de la cita al grupo correspondiente
            acc[curr.mascota_nombre].push({
                cita_fecha: curr.cita_fecha,
                motivo: curr.motivo,
                tratamiento: curr.tratamiento_descripcion,
            });

            return acc;
        }, {});

        console.log(JSON.stringify(groupedData)); // Verifica los datos agrupados (solo en desarrollo)

        // Renderizar la vista del dashboard con los datos agrupados
        res.render("dashboard/index", { groupedData });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al cargar la información del dashboard");
    }
};

export default { showDashboard };

