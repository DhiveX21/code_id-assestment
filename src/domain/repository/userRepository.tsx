/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAlbum } from "../../_types/albums.type";
import { IPost } from "../../_types/posts.type";
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
  getDetailUserRepository: async (userId: number): Promise<IUser> => {
    try {
      const res: AxiosResponse<IUser> = await userDatasource.getDetailUser(
        userId
      );
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getAllPostsByUserIdRepository: async (userId: number): Promise<IPost[]> => {
    try {
      const res: AxiosResponse<IPost[]> =
        await userDatasource.getAllPostsByUserId(userId);
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getAllAlbumsByUserIdRepository: async (userId: number): Promise<IAlbum[]> => {
    try {
      const res: AxiosResponse<IAlbum[]> =
        await userDatasource.getAllAlbumsByUserId(userId);
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default userRepository;
