import { useState } from "react";
import { toast } from "react-hot-toast";
import { IAlbum, IPhoto } from "../_types/albums.type";
import albumService from "../domain/service/albumService";

const useAlbumDetail = () => {
  const [albumData, setAlbumData] = useState<IAlbum | null>();
  const [photoData, setPhotoData] = useState<IPhoto[] | null>();

  const getDetailAlbum = async (idAlbum: number) => {
    try {
      const data = await albumService.getDetailAlbumService(idAlbum);
      if (data) {
        setAlbumData(data);
      } else {
        toast.error(`Can't Fetch Album`);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };
  const getAllPhotoByAlbum = async (idAlbum: number) => {
    try {
      const data = await albumService.getAllPhotoByAlbumIdService(idAlbum);
      if (data) {
        setPhotoData(data);
      } else {
        toast.error(`Can't Fetch Photo`);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  return {
    getDetailAlbum,
    albumData,
    getAllPhotoByAlbum,
    photoData,
  };
};

export default useAlbumDetail;
