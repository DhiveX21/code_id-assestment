import { IComment } from "../../_types/comments.type";
import {
  ICreateCommentPayload,
  ICreatePostPayload,
  IUpdateCommentPayload,
  IUpdatePostPayload,
} from "../../_types/payload.type";
import { IPost } from "../../_types/posts.type";

export interface IPostRepository {
  getDetailPostRepository: (postId: number) => Promise<IPost>;
  getCommentByPostIdRepository: (postId: number) => Promise<IComment[]>;
  deletePostByIdRepository: (postId: number) => Promise<IPost>;
  createPostRepository: (payload: ICreatePostPayload) => Promise<IPost>;
  updatePostRepository: (payload: IUpdatePostPayload) => Promise<IPost>;
  deleteCommentByIdRepository: (commentId: number) => Promise<IComment>;
  createCommentRepository: (
    payload: ICreateCommentPayload
  ) => Promise<IComment>;
  updateCommentRepository: (
    payload: IUpdateCommentPayload
  ) => Promise<IComment>;
}
