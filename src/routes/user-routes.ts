import { Router } from "express";
import { createUserController } from "../controllers/create-user-controller";

const userRoutes = Router();
userRoutes.post('/create', createUserController);

export default userRoutes;