import clientModel from '../models/clientModel.js';

const getClients = async (req, res) => {
    try {
        const clients = await clientModel.getAllClients();
        res.render('clients/index', { clients });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const showCreateForm = (req, res) => {
    res.render('clients/create');
};

const createClient = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        await clientModel.addClient({ name, email, phone });
        res.redirect('/customers');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const showEditForm = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await clientModel.getClientById(id);
        res.render('clients/edit', { client });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const editClient = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    try {
        await clientModel.updateClient(id, { name, email, phone });
        res.redirect('/customers');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        await clientModel.deleteClient(id);
        res.redirect('/customers');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default { getClients, showCreateForm, createClient, showEditForm, editClient, deleteClient };
