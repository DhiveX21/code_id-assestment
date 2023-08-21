import { toast } from "react-hot-toast";
import { IAlbum, IPhoto } from "../../_types/albums.type";
import albumRepository from "../repository/albumRepository";

const albumService = {
  getDetailAlbumService: async (albumId: number): Promise<IAlbum | null> => {
    try {
      const res = await albumRepository.getDetailAlbumRepository(albumId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getAllPhotoByAlbumIdService: async (
    albumId: number
  ): Promise<IPhoto[] | null> => {
    try {
      const res = await albumRepository.getAllPhotoByAlbumIdRepository(albumId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
};

export default albumService;
