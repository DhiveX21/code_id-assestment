import { useState } from "react";
import { toast } from "react-hot-toast";
import { IPhoto } from "../_types/albums.type";
import albumService from "../domain/service/albumService";

const usePhotoDetail = () => {
  const [photoData, setPhotoData] = useState<IPhoto | null>();

  const getDetailPhoto = async (idPhoto: number) => {
    try {
      const data = await albumService.getDetailPhotoService(idPhoto);
      if (data) {
        setPhotoData(data);
      } else {
        toast.error(`Can't Fetch Album`);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  return {
    getDetailPhoto,
    photoData,
  };
};

export default usePhotoDetail;
