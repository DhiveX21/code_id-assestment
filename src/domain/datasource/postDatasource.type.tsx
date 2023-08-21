import { AxiosResponse } from "axios";
import { IPost } from "../../_types/posts.type";
import { IComment } from "../../_types/comments.type";
import {
  ICreateCommentPayload,
  ICreatePostPayload,
  IUpdateCommentPayload,
  IUpdatePostPayload,
} from "../../_types/payload.type";

export interface IPostDatasource {
  getDetailPost: (postId: number) => Promise<AxiosResponse<IPost>>;
  getCommentByPostId: (postId: number) => Promise<AxiosResponse<IComment[]>>;
  deletePostById: (postId: number) => Promise<AxiosResponse<IPost>>;
  createPost: (payload: ICreatePostPayload) => Promise<AxiosResponse<IPost>>;
  updatePost: (payload: IUpdatePostPayload) => Promise<AxiosResponse<IPost>>;
  deleteCommentById: (commentId: number) => Promise<AxiosResponse<IComment>>;
  createComment: (
    payload: ICreateCommentPayload
  ) => Promise<AxiosResponse<IComment>>;
  updateComment: (
    payload: IUpdateCommentPayload
  ) => Promise<AxiosResponse<IComment>>;
}
