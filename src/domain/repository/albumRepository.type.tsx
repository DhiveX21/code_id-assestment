import { IAlbum, IPhoto } from "../../_types/albums.type";

export interface IAlbumRepository {
  getDetailAlbumRepository: (albumId: number) => Promise<IAlbum>;
  getAllPhotoByAlbumIdRepository: (albumId: number) => Promise<IPhoto[]>;
}
