/* eslint-disable @typescript-eslint/no-explicit-any */

import { IComment } from "../../_types/comments.type";
import { IPost } from "../../_types/posts.type";
import postDatasource from "../datasource/postDatasource";
import { IPostRepository } from "./postRepository.type";
import { AxiosResponse } from "axios";

const postRepository: IPostRepository = {
  getDetailPostRepository: async (postId: number): Promise<IPost> => {
    try {
      const res: AxiosResponse<IPost> = await postDatasource.getDetailPost(
        postId
      );
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  getCommentByPostIdRepository: async (postId: number): Promise<IComment[]> => {
    try {
      const res: AxiosResponse<IComment[]> =
        await postDatasource.getCommentByPostId(postId);
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  deletePostByIdRepository: async (postId: number): Promise<IPost> => {
    try {
      const res: AxiosResponse<IPost> = await postDatasource.deletePostById(
        postId
      );
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default postRepository;
