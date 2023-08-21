import axios, { AxiosResponse } from "axios";
import { IUserDatasource } from "./userDatasource.type";
import { IUser } from "../../_types/users.type";

const API_URL = "https://jsonplaceholder.typicode.com";

const userDatasource: IUserDatasource = {
  getAllUsers: (): Promise<AxiosResponse<IUser[]>> => {
    return axios.get(`${API_URL}/users`);
  },
};

export default userDatasource;
