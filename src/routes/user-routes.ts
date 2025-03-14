import { Router } from "express";
import { createUserController } from "../controllers/create-user-controller";
import { authenticateUserController } from "../controllers/authenticate-user-controller";

const userRoutes = Router();
userRoutes.post('/create', createUserController);
userRoutes.post('/login', authenticateUserController);

export default userRoutes;
