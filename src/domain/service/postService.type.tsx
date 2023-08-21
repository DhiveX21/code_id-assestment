import { IComment } from "../../_types/comments.type";
import {
  ICreatePostPayload,
  IUpdatePostPayload,
} from "../../_types/payload.type";
import { IPost } from "../../_types/posts.type";

export interface IUserService {
  getDetailPostService: (postId: number) => Promise<IPost | null>;
  getCommentByPostIdService: (postId: number) => Promise<IComment[] | null>;
  deletePostByIdService: (postId: number) => Promise<IPost | null>;
  createPostService: (payload: ICreatePostPayload) => Promise<IPost | null>;
  updatePostService: (payload: IUpdatePostPayload) => Promise<IPost | null>;
  deleteCommentByIdService: (commentId: number) => Promise<IComment | null>;
}
