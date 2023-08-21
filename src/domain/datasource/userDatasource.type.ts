import { AxiosResponse } from "axios";
import { IUser } from "../../_types/users.type";

export interface IUserDatasource {
  getAllUsers: () => Promise<AxiosResponse<IUser[]>>;
}
