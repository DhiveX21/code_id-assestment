import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePhotoDetail from "../../_hooks/usePhotoDetail";

const PhotoDetailPage = () => {
  const { photoId } = useParams();
  const { getDetailPhoto, photoData } = usePhotoDetail();

  useEffect(() => {
    if (photoId) {
      getDetailPhoto(Number(photoId));
    }
  }, []);

  return (
    <>
      <h2 className="w-screen text-center font-bold text-4xl my-4 text-blue-400">
        {photoData?.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        <picture>
          <img src={photoData?.url} alt="Photo Detail" />
        </picture>
      </div>
    </>
  );
};

export default PhotoDetailPage;
