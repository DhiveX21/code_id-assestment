import { IAlbum } from "../../_types/albums.type";
import { IPost } from "../../_types/posts.type";
import { IUser } from "../../_types/users.type";

export interface IUserRepository {
  getAllUsersRepository: () => Promise<IUser[]>;
  getDetailUserRepository: (userId: number) => Promise<IUser>;
  getAllPostsByUserIdRepository: (userId: number) => Promise<IPost[]>;
  getAllAlbumsByUserIdRepository: (userId: number) => Promise<IAlbum[]>;
}
