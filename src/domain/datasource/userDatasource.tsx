import axios, { AxiosResponse } from "axios";
import { IUserDatasource } from "./userDatasource.type";
import { IUser } from "../../_types/users.type";
import { IPost } from "../../_types/posts.type";
import { IAlbum } from "../../_types/albums.type";

const API_URL = "https://jsonplaceholder.typicode.com";

const userDatasource: IUserDatasource = {
  getAllUsers: (): Promise<AxiosResponse<IUser[]>> => {
    return axios.get(`${API_URL}/users`);
  },
  getDetailUser: (userId: number): Promise<AxiosResponse<IUser>> => {
    return axios.get(`${API_URL}/users/${userId}`);
  },
  getAllPostsByUserId: (userId: number): Promise<AxiosResponse<IPost[]>> => {
    return axios.get(`${API_URL}/users/${userId}/posts`);
  },
  getAllAlbumsByUserId: (userId: number): Promise<AxiosResponse<IAlbum[]>> => {
    return axios.get(`${API_URL}/users/${userId}/albums`);
  },
};

export default userDatasource;
