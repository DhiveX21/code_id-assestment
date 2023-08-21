import { useState } from "react";

import { toast } from "react-hot-toast";
import { IPost } from "../_types/posts.type";
import postService from "../domain/service/postService";
import { IComment } from "../_types/comments.type";
import {
  ICreateCommentPayload,
  IUpdateCommentPayload,
} from "../_types/payload.type";

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
  const handleDeleteComment = async (commentId: number) => {
    try {
      await postService.deleteCommentByIdService(commentId);
      toast.success(`Success Delete Comment.`);
    } catch (error) {
      toast.error(String(error));
    }
  };
  const handleCreateComment = async (payload: ICreateCommentPayload) => {
    try {
      await postService.createCommentService(payload);
      toast.success(`Success Create Comment.`);
    } catch (error) {
      toast.error(String(error));
    }
  };
  const handleUpdateComment = async (payload: IUpdateCommentPayload) => {
    try {
      await postService.updateCommentService(payload);
      toast.success(`Success Update Comment.`);
    } catch (error) {
      toast.error(String(error));
    }
  };

  return {
    getDetailPost,
    postData,
    getCommentPost,
    commentData,
    handleDeleteComment,
    handleCreateComment,
    handleUpdateComment,
  };
};

export default usePostDetail;
