import { AxiosResponse } from "axios";

import { IAlbum, IPhoto } from "../../_types/albums.type";

export interface IAlbumDatasource {
  getDetailAlbum: (albumId: number) => Promise<AxiosResponse<IAlbum>>;
  getAllPhotoByAlbumId: (albumId: number) => Promise<AxiosResponse<IPhoto[]>>;
}
