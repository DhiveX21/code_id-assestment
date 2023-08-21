import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePhotoDetail from "../../_hooks/usePhotoDetail";
import BackButton from "../../components/backButton";

const PhotoDetailPage = () => {
  const { photoId, userId, albumId } = useParams();
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
      <div className="flex justify-center mt-4">
        <BackButton link={`/user/${userId}/album/${albumId}`} />
      </div>
    </>
  );
};

export default PhotoDetailPage;
