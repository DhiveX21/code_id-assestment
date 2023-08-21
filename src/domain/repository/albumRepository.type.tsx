import { IAlbum, IPhoto } from "../../_types/albums.type";

export interface IAlbumRepository {
  getDetailAlbumRepository: (albumId: number) => Promise<IAlbum>;
  getDetailPhotoRepository: (photoId: number) => Promise<IPhoto>;
  getAllPhotoByAlbumIdRepository: (albumId: number) => Promise<IPhoto[]>;
}
