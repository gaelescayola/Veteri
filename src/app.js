import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import expressLayouts from "express-ejs-layouts";

// Rutas de tu proyecto
import mascotasRoutes from "./routes/mascotasRoutes.js";
import citasRoutes from "./routes/citasRoutes.js";
import serviciosRoutes from "./routes/serviciosRoutes.js";
import empleadosRoutes from "./routes/empleadosRoutes.js";
import tratamientosRoutes from "./routes/tratamientosRoutes.js";
import vacunasRoutes from "./routes/vacunasRoutes.js";
import clientesRoutes from "./routes/clientesRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

// Resuelve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de EJS y Layouts
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Rutas de tu proyecto
app.use("/clientes", clientesRoutes);
app.use("/mascotas", mascotasRoutes);
app.use("/citas", citasRoutes);
app.use("/servicios", serviciosRoutes);
app.use("/empleados", empleadosRoutes);
app.use("/tratamientos", tratamientosRoutes);
app.use("/vacunas", vacunasRoutes);
app.use("/", dashboardRoutes);

export default app;
