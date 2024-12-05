import express from 'express';
import clientController from '../controllers/clientController.js';

const router = express.Router();

// Ver todos los clientes
router.get('/', clientController.getClients);

// Crear un nuevo cliente
router.get('/create', clientController.showCreateForm);
router.post('/create', clientController.createClient);

// Editar cliente
router.get('/edit/:id', clientController.showEditForm);
router.post('/edit/:id', clientController.editClient);

// Eliminar cliente
router.get('/delete/:id', clientController.deleteClient);

export default router;
