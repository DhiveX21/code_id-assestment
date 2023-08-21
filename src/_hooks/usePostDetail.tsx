import { useState } from "react";
import { IUser } from "../_types/users.type";
import userService from "../domain/service/userService";
import { toast } from "react-hot-toast";
import { IPost } from "../_types/posts.type";
import { IAlbum } from "../_types/albums.type";
import postService from "../domain/service/postService";
import { IComment } from "../_types/comments.type";

const usePostDetail = () => {
  const [postData, setPostData] = useState<IPost | null>();
  const [commentData, setCommentData] = useState<IComment[] | null>();
  const getDetailPost = async (postId: number) => {
    try {
      const data = await postService.getDetailPostService(postId);
      if (data) {
        setPostData(data);
      } else {
        toast.error(`Can't Fetch Post Detail`);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };
  const getCommentPost = async (postId: number) => {
    try {
      const data = await postService.getCommentByPostIdService(postId);
      if (data) {
        setCommentData(data);
      } else {
        toast.error(`Can't Fetch Post Detail`);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  return {
    getDetailPost,
    postData,
    getCommentPost,
    commentData,
  };
};

export default usePostDetail;
