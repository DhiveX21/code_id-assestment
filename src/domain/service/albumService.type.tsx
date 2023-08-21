import { IAlbum, IPhoto } from "../../_types/albums.type";

export interface IUserService {
  getDetailAlbumService: (albumId: number) => Promise<IAlbum | null>;
  getDetailPhotoService: (photoId: number) => Promise<IPhoto | null>;
  getAllPhotoByAlbumIdService: (albumId: number) => Promise<IPhoto[] | null>;
}
