import { AxiosResponse } from "axios";
import { IPost } from "../../_types/posts.type";
import { IComment } from "../../_types/comments.type";

export interface IPostDatasource {
  getDetailPost: (postId: number) => Promise<AxiosResponse<IPost>>;
  getCommentByPostId: (postId: number) => Promise<AxiosResponse<IComment[]>>;
  deletePostById: (postId: number) => Promise<AxiosResponse<IPost>>;
}
