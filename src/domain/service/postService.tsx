import { toast } from "react-hot-toast";
import { IPost } from "../../_types/posts.type";
import postRepository from "../repository/postRepository";
import { IComment } from "../../_types/comments.type";

const postService = {
  getDetailPostService: async (postId: number): Promise<IPost | null> => {
    try {
      const res = await postRepository.getDetailPostRepository(postId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  getCommentByPostIdService: async (
    postId: number
  ): Promise<IComment[] | null> => {
    try {
      const res = await postRepository.getCommentByPostIdRepository(postId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
  deletePostByIdService: async (postId: number): Promise<IPost | null> => {
    try {
      const res = await postRepository.deletePostByIdRepository(postId);
      return res;
    } catch (error) {
      toast.error(String(error));
      return null;
    }
  },
};

export default postService;
