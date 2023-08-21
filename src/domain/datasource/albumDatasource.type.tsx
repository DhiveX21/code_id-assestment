import { AxiosResponse } from "axios";

import { IAlbum, IPhoto } from "../../_types/albums.type";

export interface IAlbumDatasource {
  getDetailAlbum: (albumId: number) => Promise<AxiosResponse<IAlbum>>;
  getDetailPhoto: (photoId: number) => Promise<AxiosResponse<IPhoto>>;
  getAllPhotoByAlbumId: (albumId: number) => Promise<AxiosResponse<IPhoto[]>>;
}
