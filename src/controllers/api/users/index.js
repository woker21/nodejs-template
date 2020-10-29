import express from 'express';
import * as UsersModel from "@Models/users";
import { asyncHandler } from "@Middlwares/error-handler";
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
  res.send("va bien la cosaa"); 
}));

router.get("/restricted-path", restrictedAccess, asyncHandler(async(req, res) => {
  res.send(`User id: ${req.userId}`);
}));

router.delete("/:id", restrictedAccess,asyncHandler( async (req, res) => {
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
