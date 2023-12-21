import { User } from "../../Domain/entity/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepositories";
import { ApiRogans } from "../source/remote/api/ApiRogans";
import { ResponseAPIRogans } from "../source/remote/models/ResponseApiRogans";

export class AuthRepositoryImpl implements AuthRepository {

    async register(user: User) {
        try {
            const response = await ApiRogans.post<ResponseAPIRogans>('/users/create', user);
            console.log('RESPONSE REPOSITORY' + JSON.stringify(response.data));
            return Promise.resolve({error: undefined, result: response.data});
        } catch (error) {
            let e = (error as Error).message;
            console.log('ERROR', + e);
            return Promise.resolve({error: e, result: undefined})
        }
    }
}