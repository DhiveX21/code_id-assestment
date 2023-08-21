/* eslint-disable @typescript-eslint/no-explicit-any */

import { IAlbum, IPhoto } from "../../_types/albums.type";
import albumDatasource from "../datasource/albumDatasource";
import { IAlbumRepository } from "./albumRepository.type";
import { AxiosResponse } from "axios";

const albumRepository: IAlbumRepository = {
  getDetailAlbumRepository: async (albumId: number): Promise<IAlbum> => {
    try {
      const res: AxiosResponse<IAlbum> = await albumDatasource.getDetailAlbum(
        albumId
      );
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getAllPhotoByAlbumIdRepository: async (
    albumId: number
  ): Promise<IPhoto[]> => {
    try {
      const res: AxiosResponse<IPhoto[]> =
        await albumDatasource.getAllPhotoByAlbumId(albumId);
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default albumRepository;
