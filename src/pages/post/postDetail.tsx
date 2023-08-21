import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePostDetail from "../../_hooks/usePostDetail";
import { IComment } from "../../_types/comments.type";
// import useUserDetail from "../../_hooks/useUserDetail";
// import { IPost } from "../../_types/posts.type";
// import { Link } from "react-router-dom";
// import { IAlbum } from "../../_types/albums.type";

const PostDetailPage = () => {
  const { postId } = useParams();
  const { getDetailPost, postData, getCommentPost, commentData } =
    usePostDetail();

  useEffect(() => {
    if (postId) {
      getDetailPost(Number(postId));
      getCommentPost(Number(postId));
    }
  }, []);

  return (
    <>
      <div className="w-screen bg-gray-100">
        <div className="user-card  w-full px-20 py-10 rounded-lg shadow-md flex items-center justify-center gap-4">
          <div className=" h-full w-2/3 flex flex-col  gap-4">
            <div className="relative flex flex-col items-center rounded-[20px] w-full mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500">
              <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                <img
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
                  className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
                />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  {postData?.title}
                </h4>
                <p className="text-base font-normal text-gray-600">
                  {postData?.body}
                </p>
              </div>
              <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                <div className="flex justify-start items-start ">
                  <p className="text-2xl font-bold text-navy-700 ">
                    {/* {userData?.phone} */}
                  </p>
                  <p className="text-sm font-normal text-gray-600">
                    Comments ({commentData?.length})
                  </p>
                </div>
              </div>
              {commentData?.map((comment: IComment) => (
                <div className="w-full border-t-2 py-2 border-gray-100">
                  <div className="text-slate-600 font-bold text-sm">
                    <p>{comment.email}</p>
                  </div>
                  <div className="text-blue-400 font-bold text-xs">
                    <p>{comment.name}</p>
                  </div>
                  <div className="text-xs text-gray-400">
                    <p>{comment.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;
