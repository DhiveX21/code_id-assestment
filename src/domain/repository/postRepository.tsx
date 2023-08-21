/* eslint-disable @typescript-eslint/no-explicit-any */

import { IComment } from "../../_types/comments.type";
import {
  ICreateCommentPayload,
  ICreatePostPayload,
  IUpdateCommentPayload,
  IUpdatePostPayload,
} from "../../_types/payload.type";
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
  createPostRepository: async (payload: ICreatePostPayload): Promise<IPost> => {
    try {
      const res: AxiosResponse<IPost> = await postDatasource.createPost(
        payload
      );
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  updatePostRepository: async (payload: IUpdatePostPayload): Promise<IPost> => {
    try {
      const res: AxiosResponse<IPost> = await postDatasource.updatePost(
        payload
      );
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  deleteCommentByIdRepository: async (commentId: number): Promise<IComment> => {
    try {
      const res: AxiosResponse<IComment> =
        await postDatasource.deleteCommentById(commentId);
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  createCommentRepository: async (
    payload: ICreateCommentPayload
  ): Promise<IComment> => {
    try {
      const res: AxiosResponse<IComment> = await postDatasource.createComment(
        payload
      );
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
  updateCommentRepository: async (
    payload: IUpdateCommentPayload
  ): Promise<IComment> => {
    try {
      const res: AxiosResponse<IComment> = await postDatasource.updateComment(
        payload
      );
      return res.data;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      throw new Error(String(error));
    }
  },
};

export default postRepository;
