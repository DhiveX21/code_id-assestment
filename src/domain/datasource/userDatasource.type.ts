import { AxiosResponse } from "axios";
import { IUser } from "../../_types/users.type";
import { IPost } from "../../_types/posts.type";
import { IAlbum } from "../../_types/albums.type";

export interface IUserDatasource {
  getAllUsers: () => Promise<AxiosResponse<IUser[]>>;
  getDetailUser: (userId: number) => Promise<AxiosResponse<IUser>>;
  getAllPostsByUserId: (userId: number) => Promise<AxiosResponse<IPost[]>>;
  getAllAlbumsByUserId: (userId: number) => Promise<AxiosResponse<IAlbum[]>>;
}
