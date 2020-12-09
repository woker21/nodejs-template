import express from 'express';
import * as UsersModel from "@Models/users";
import { asyncHandler } from "@Middlwares/error-handler";
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.post("/login", asyncHandler(async (req, res) => {
  const mail = req.body.mail;
  const pass = req.body.pass;
  if (!mail || !pass) return res.send(400);
  const user = await UsersModel.getUserByEmailAndPassword(mail, pass);

  if (!user) {
    return res.sendStatus(403);
  }
  const token = createToken({ id: user.id });
  res.send(token);
})
);


router.get("/restricted-path", restrictedAccess, asyncHandler(async (req, res) => {
  const { query: { userId } } = req;
  res.send(`User id: ${req.userId}`);
}));

router.post("/create", asyncHandler(async (req, res) => {
  const mail = req.body.mail;
  const pass = req.body.pass;
  await UsersModel.createUser(mail, pass)
  res.send('Usuario creado con éxito');
}));

router.delete("/:id", restrictedAccess, asyncHandler(async (req, res) => {
  const { params: { id } } = req;
  await UsersModel.deleteUser(id);
  res.send(`User id: ${id} deleted`);
}));

router.patch("/:id", restrictedAccess, async (req, res) => {
  const { params: { id }, body } = req;
  await UsersModel.updateUser(id, body);
  res.send(`User id: ${id} updated`);
});

export default router;
