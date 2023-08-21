import { IComment } from "../../_types/comments.type";
import {
  ICreatePostPayload,
  IUpdatePostPayload,
} from "../../_types/payload.type";
import { IPost } from "../../_types/posts.type";

export interface IPostRepository {
  getDetailPostRepository: (postId: number) => Promise<IPost>;
  getCommentByPostIdRepository: (postId: number) => Promise<IComment[]>;
  deletePostByIdRepository: (postId: number) => Promise<IPost>;
  createPostRepository: (payload: ICreatePostPayload) => Promise<IPost>;
  updatePostRepository: (payload: IUpdatePostPayload) => Promise<IPost>;
}
