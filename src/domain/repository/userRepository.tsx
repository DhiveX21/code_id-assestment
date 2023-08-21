/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "../../_types/users.type";
import userDatasource from "../datasource/userDatasource";
import { IUserRepository } from "./userRepository.type";
import { AxiosResponse } from "axios";

const userRepository: IUserRepository = {
  getAllUsersRepository: async (): Promise<IUser[]> => {
    try {
      const res: AxiosResponse<IUser[]> = await userDatasource.getAllUsers();
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default userRepository;
