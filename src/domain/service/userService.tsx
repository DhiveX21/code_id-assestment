import { toast } from "react-hot-toast";
import userRepository from "../repository/userRepository";

import { IUser } from "../../_types/users.type";

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
};

export default userService;
