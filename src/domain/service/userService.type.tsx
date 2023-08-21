import { IUser } from "../../_types/users.type";

export interface IUserService {
  getAllUsersService: () => Promise<IUser[] | null>;
}
