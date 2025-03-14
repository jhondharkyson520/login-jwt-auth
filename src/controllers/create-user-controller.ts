import { PrismaUserRepository } from "../repositories/prisma-user-repository";
import { CreateUser } from "../use-cases/create-user";
import { Request, Response } from 'express';

const userRepository = new PrismaUserRepository();
const createUser = new CreateUser(userRepository);

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {name, email, password} = req.body;
        const user =  await createUser.execute(name, email, password);
        return res.status(201).json({sucess: 'User created'});
    } catch(error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
        
    }
}
