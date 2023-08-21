import { IAlbum } from "../../_types/albums.type";
import { IPost } from "../../_types/posts.type";
import { IUser } from "../../_types/users.type";

export interface IUserService {
  getAllUsersService: () => Promise<IUser[] | null>;
  getDEtailUserService: (userId: number) => Promise<IUser | null>;
  getAllPostsByUserIdService: (userId: number) => Promise<IPost[] | null>;
  getAllAlbumsByUserIdService: (userId: number) => Promise<IAlbum[] | null>;
}
