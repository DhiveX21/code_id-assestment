import axios, { AxiosResponse } from "axios";

import { IAlbum, IPhoto } from "../../_types/albums.type";
import { IAlbumDatasource } from "./albumDatasource.type";

const API_URL = "https://jsonplaceholder.typicode.com";

const albumDatasource: IAlbumDatasource = {
  getDetailAlbum: (albumId: number): Promise<AxiosResponse<IAlbum>> => {
    return axios.get(`${API_URL}/albums/${albumId}`);
  },
  getAllPhotoByAlbumId: (albumId: number): Promise<AxiosResponse<IPhoto[]>> => {
    return axios.get(`${API_URL}/albums/${albumId}/photos`);
  },
};

export default albumDatasource;
