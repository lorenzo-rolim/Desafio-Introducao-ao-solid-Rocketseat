import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string | string[];
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    execute({ user_id }: IRequest): User[] {

        const alreadyExistsUser = this.usersRepository.findById(user_id)

        if (alreadyExistsUser && alreadyExistsUser.admin === true) {
            return this.usersRepository.list()
        }

        throw new Error("Usuário não é um ADM!");

    }
}

export { ListAllUsersUseCase };
