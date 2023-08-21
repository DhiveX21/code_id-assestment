import { IComment } from "../../_types/comments.type";
import { IPost } from "../../_types/posts.type";

export interface IUserService {
  getDetailPostService: (postId: number) => Promise<IPost | null>;
  getCommentByPostIdService: (postId: number) => Promise<IComment[] | null>;
  deletePostByIdService: (postId: number) => Promise<IPost | null>;
}
