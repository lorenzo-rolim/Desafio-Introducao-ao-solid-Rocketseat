import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    execute({ email, name }: IRequest): void {

        const alreadyExistsUser = this.usersRepository.findByEmail(email)

        if (alreadyExistsUser) {
            throw new Error("User already exists!");
        }

        return this.usersRepository.create({ name, email })
    }
}

export { CreateUserUseCase };
