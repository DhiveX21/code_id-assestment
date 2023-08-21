import { toast } from "react-hot-toast";
import userRepository from "../repository/userRepository";

import { IUser } from "../../_types/users.type";
import { IPost } from "../../_types/posts.type";
import { IAlbum } from "../../_types/albums.type";

const userService = {
  getAllUsersService: async (): Promise<IUser[] | null> => {
    try {
      const res = await userRepository.getAllUsersRepository();
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getDetailUserService: async (userId: number): Promise<IUser | null> => {
    try {
      const res = await userRepository.getDetailUserRepository(userId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getAllPostsByUserIdService: async (
    userId: number
  ): Promise<IPost[] | null> => {
    try {
      const res = await userRepository.getAllPostsByUserIdRepository(userId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getAllAlbumsByUserIdService: async (
    userId: number
  ): Promise<IAlbum[] | null> => {
    try {
      const res = await userRepository.getAllAlbumsByUserIdRepository(userId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
};

export default userService;
