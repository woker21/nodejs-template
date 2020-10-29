import express from 'express';
import * as UsersModel from "@Models/users";
import { createToken } from "@Utils/access";
import { asyncHandler } from "@Middlwares/error-handler";

const router = express.Router();

router.post("/login", asyncHandler(async (req, res) => {
    const mail = req.body.mail;
    const pass = req.body.pass;

    if (!mail || !pass) return res.send(400);
    const user = await UsersModel.getUserByEmailAndPassword(mail, pass);

    if(!user) {
      return res.sendStatus(403);
    }

    const token = createToken({ id: user.id });

    res.send(token);
  })
);

router.post("/register", asyncHandler(async (req, res) => {
  const mail = req.body.mail;
  const pass = req.body.pass;
  await UsersModel.createUser(mail, pass)
  res.send('Usuario creado con éxito');
}));


export default router;
