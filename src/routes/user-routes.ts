import { Request, Response, Router } from "express";
import { createUserController } from "../controllers/create-user-controller";
import { authenticateUserController } from "../controllers/authenticate-user-controller";
import { authenticateToken } from "../middleware/authorization-routes";

const userRoutes = Router();
userRoutes.post('/create', createUserController);
userRoutes.post('/login', authenticateUserController);
userRoutes.get('/hello', authenticateToken, (req: Request, res: Response) => {
    return res.status(200).json({message: 'Hello World'})
})

export default userRoutes;
