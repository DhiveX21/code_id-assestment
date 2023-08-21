import { IUser } from "../../_types/users.type";

export interface IUserRepository {
  getAllUsersRepository: () => Promise<IUser[]>;
}
