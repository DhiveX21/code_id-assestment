import { IComment } from "../../_types/comments.type";
import { IPost } from "../../_types/posts.type";

export interface IPostRepository {
  getDetailPostRepository: (postId: number) => Promise<IPost>;
  getCommentByPostIdRepository: (postId: number) => Promise<IComment[]>;
  deletePostByIdRepository: (postId: number) => Promise<IPost>;
}
