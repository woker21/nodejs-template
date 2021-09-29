import express from 'express';
import { asyncHandler } from "@Middlwares/error-handler";
import * as Model from "../model";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

// GET ALL
router.get('/', asyncHandler(async (req, res) => {
  const data = await Model.get();
  res.send(data);
}));

// GET BY ID
router.get('/:id', asyncHandler(async (req, res) => {
  const { query: { id } } = req;
  const data = await Model.getById(id);
  res.send(data);
}));

// CREATE
router.post("/", asyncHandler(async (req, res) => {
  const { body: { mail, username, password } } = req;
  await Model.create(mail, username, password)
  res.send('Usuario creado con éxito');
}));

// DELETE
router.delete("/:id", asyncHandler(async (req, res) => {
  const { params: { id } } = req;
  await Model.remove(id);
  res.send(`User id: ${id} deleted`);
}));

// TOTAL UPDATE
router.put("/:id", async (req, res) => {
  const { params: { id }, body } = req;
  await Model.update(id, body);
  res.send(`User id: ${id} updated`);
});


export default router;