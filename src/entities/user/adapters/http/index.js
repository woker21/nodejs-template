import express from 'express';
import Controller from '../../controller';
import { asyncHandler } from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

// GET ALL
router.get('/', asyncHandler(async (req, res) => {
    const data = await Controller.get();
    res.send(data);
}));

// GET BY ID
router.get('/:id', asyncHandler(async (req, res) => {
    const { query: { id } } = req;
    const data = await Controller.getById(id);
    res.send(data);
}));

// GET BY ID
router.get('/by-email', asyncHandler(async (req, res) => {
    const { query: { email } } = req;
    const data = await Controller.getByEmail(email);
    res.send(data);
}));

// CREATE
router.post("/", asyncHandler(async (req, res) => {
    const { body: { email, username, password } } = req;
    await Controller.create({ email, username, password })
    res.send('Usuario creado con éxito');
}));

// DELETE
router.delete("/:id", asyncHandler(async (req, res) => {
    const { params: { id } } = req;
    await Controller.deleteById(id);
    res.send(`User id: ${id} deleted`);
}));

// TOTAL UPDATE
router.put("/:id", async (req, res) => {
    const { params: { id }, body } = req;
    await Controller.updateById(id, body);
    res.send(`User id: ${id} updated`);
});

export default app => app.use('/user', router);
