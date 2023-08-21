import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUserDetail from "../../_hooks/useUserDetail";
import { IPost } from "../../_types/posts.type";
import { Link } from "react-router-dom";
import { IAlbum } from "../../_types/albums.type";
import AddPostModal from "../../components/posts/addPostModal";

const UserDetailPage = () => {
  const { userId } = useParams();
  const {
    getDetailUser,
    userData,
    getPostByUser,
    postData,
    getAlbumByUser,
    albumData,
    handleDeletePost,
  } = useUserDetail();

  useEffect(() => {
    if (userId) {
      getDetailUser(Number(userId));
      getPostByUser(Number(userId));
      getAlbumByUser(Number(userId));
    }
  }, []);

  return (
    <>
      <div className="relative w-screen bg-gray-100">
        <div className="user-card  w-full px-20 py-10 rounded-lg shadow-md flex gap-4">
          <div className=" h-full w-1/3 flex flex-col gap-4">
            <div className="relative flex flex-col items-center rounded-[20px] w-full mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500">
              <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                <img
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
                  className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
                />
                <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 ">
                  <img
                    className="h-full w-full rounded-full"
                    src="/vite.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-16 flex flex-col items-center">
                <h4 className="text-xl font-bold text-blue-900 ">
                  {userData?.name}
                </h4>
                <p className="text-base font-normal text-gray-600">
                  {userData?.username}
                </p>
              </div>
              <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-navy-700 ">
                    {userData?.phone}
                  </p>
                  <p className="text-sm font-normal text-gray-600">
                    Phone Number
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-[20px] items-center justify-center p-5 gap-4">
              <h3 className="text-2xl font-bold p-4 text-blue-400 text-center">
                Album Lists ({albumData?.length})
              </h3>
              {albumData?.map((album: IAlbum) => (
                <Link to={`album/${album.id}`}>
                  <div className="flex bg-white rounded-[10px] w-full items-center justify-center ">
                    <div className="border-2 rounded-[20px] w-full border-gray-200 p-2">
                      <h4 className="font-extrabold text-gray-400">
                        {album.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className=" h-full w-2/3 flex flex-col gap-4">
            <div className="relative flex flex-col gap-2 items-center rounded-[20px] w-full mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500">
              <div className=" flex items-center justify-center">
                <p className="text-sm font-bold mr-2">Address : </p>
                <p className="text-sm font-bold text-gray-400">
                  {`${userData?.address.city}, ${userData?.address.street}, ${userData?.address.suite}, ${userData?.address.zipcode}`}
                </p>
              </div>
              <div className=" flex items-center justify-center">
                <p className="text-sm font-bold mr-2">Email : </p>
                <p className="text-sm font-bold text-gray-400">
                  {`${userData?.email}`}
                </p>
              </div>
              <div className=" flex items-center justify-center">
                <p className="text-sm font-bold mr-2">Website : </p>
                <p className="text-sm font-bold text-gray-400">
                  {`${userData?.website}`}
                </p>
              </div>
              <div className=" flex items-center justify-center">
                <p className="text-sm font-bold mr-2">Company : </p>
                <p className="text-sm font-bold text-gray-400">
                  {`${userData?.company.bs}, ${userData?.company.name}`}
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-[20px] items-center justify-center p-5 gap-4">
              <h3 className="text-4xl font-bold p-4 text-blue-400">
                Post Lists ({postData?.length})
              </h3>
              {postData?.map((post: IPost) => (
                <div className="relative flex gap-2">
                  <Link to={`post/${post.id}`}>
                    <div className=" flex bg-white rounded-[10px] w-full items-center justify-center ">
                      <div className="border-2 rounded-[20px] w-full border-gray-200 p-2">
                        <h4 className="font-extrabold text-gray-600">
                          {post.title}
                        </h4>
                        <p className="text-gray-400 text-sm mt-2">
                          {post.body}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      if (confirm("Are you sure to delete this post?")) {
                        handleDeletePost(post.id);
                      }
                    }}
                    className="absolute right-2 top-2 rounded-[15px] text-xs bg-red-400 text-white font-bold"
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  if (confirm("Are you sure to delete this post?")) {
                    // handleDeletePost(post.id);
                  }
                }}
                className="rounded-[15px] text-xs w-full bg-blue-400 text-white font-bold"
              >
                Add Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddPostModal />
    </>
  );
};

export default UserDetailPage;
