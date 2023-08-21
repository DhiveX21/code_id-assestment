import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { IPhoto } from "../../_types/albums.type";
import useAlbumDetail from "../../_hooks/useAlbumDetail";

const AlbumDetailPage = () => {
  const { albumId } = useParams();
  const { albumData, getDetailAlbum, getAllPhotoByAlbum, photoData } =
    useAlbumDetail();

  useEffect(() => {
    if (albumId) {
      getDetailAlbum(Number(albumId));
      getAllPhotoByAlbum(Number(albumId));
    }
  }, []);

  return (
    <>
      <h2 className="w-screen text-center font-bold text-4xl my-4 text-blue-400">
        {albumData?.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {photoData?.map((photo: IPhoto, index: number) => (
          <Link
            key={index}
            to={`/photo/${photo.id}`}
            className="user-card w-1/4 aspect-square flex items-center justify-center border-gray-500 border-2 rounded-lg"
          >
            <div className="user-card__wrapper flex flex-col items-center gap-5 p-2">
              <div className="user-card__image">
                <picture>
                  <img src={photo.thumbnailUrl} alt="photo albums item" />
                </picture>
              </div>
              <div className="user-card__name">
                <h4 className="font-bold text-center">{photo.title}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AlbumDetailPage;
