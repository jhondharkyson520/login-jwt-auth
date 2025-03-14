import { UserRepository } from "../repositories/user-repository";
import { v4 as uuidv4 } from 'uuid';

export class CreateUser {
    constructor(private userRepository: UserRepository) {}

    async execute(name: string, email: string, password: string) {
        const user = await this.userRepository.create({id: uuidv4(), name, email, password});
        return user;
    }
}
