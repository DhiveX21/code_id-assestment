import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePostDetail from "../../_hooks/usePostDetail";
import { IComment } from "../../_types/comments.type";
import AddCommentModal from "../../components/comments/addCommentModal";
import EditCommentModal from "../../components/comments/editCommentModal";
import BackButton from "../../components/backButton";

const PostDetailPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEditItem, setSelectedEditItem] = useState<IComment | null>(
    null
  );
  const { postId, userId } = useParams();
  const {
    getDetailPost,
    postData,
    getCommentPost,
    commentData,
    handleDeleteComment,
    handleCreateComment,
    handleUpdateComment,
  } = usePostDetail();

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
            <BackButton link={`/user/${userId}`} />
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
                <div className="relative w-full border-t-2 py-2 border-gray-100">
                  <div className="text-slate-600 font-bold text-sm">
                    <p>{comment.email}</p>
                  </div>
                  <div className="text-blue-400 font-bold text-xs">
                    <p>{comment.name}</p>
                  </div>
                  <div className="text-xs text-gray-400">
                    <p>{comment.body}</p>
                  </div>
                  <div className="absolute right-2 top-2 flex gap-2">
                    <button
                      onClick={() => {
                        setShowEditModal(true);
                        setSelectedEditItem(comment);
                      }}
                      className=" rounded-[15px] text-xs bg-yellow-400 text-white font-bold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Are you sure to delete this Comment?")) {
                          handleDeleteComment(comment.id);
                        }
                      }}
                      className=" rounded-[15px] text-xs bg-red-400 text-white font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => {
                  setShowAddModal(true);
                }}
                className="rounded-[15px] text-xs w-full bg-blue-400 text-white font-bold"
              >
                Add Comment +
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddCommentModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        submitFunction={(v) => {
          v.userId = Number(userId);
          handleCreateComment(v);
          setShowAddModal(false);
        }}
      />
      <EditCommentModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        submitFunction={(v) => {
          v.id = Number(selectedEditItem?.id);
          v.userId = Number(userId);
          handleUpdateComment(v);
          setShowEditModal(false);
        }}
        selectedComment={selectedEditItem}
      />
    </>
  );
};

export default PostDetailPage;
