import axios, { AxiosResponse } from "axios";
import { IPost } from "../../_types/posts.type";
import { IPostDatasource } from "./postDatasource.type";
import { IComment } from "../../_types/comments.type";
import {
  ICreateCommentPayload,
  ICreatePostPayload,
  IUpdateCommentPayload,
  IUpdatePostPayload,
} from "../../_types/payload.type";

const API_URL = "https://jsonplaceholder.typicode.com";

const postDatasource: IPostDatasource = {
  getDetailPost: (postId: number): Promise<AxiosResponse<IPost>> => {
    return axios.get(`${API_URL}/posts/${postId}`);
  },
  getCommentByPostId: (postId: number): Promise<AxiosResponse<IComment[]>> => {
    return axios.get(`${API_URL}/posts/${postId}/comments`);
  },
  deletePostById: (postId: number): Promise<AxiosResponse<IPost>> => {
    return axios.delete(`${API_URL}/posts/${postId}`);
  },
  createPost: (payload: ICreatePostPayload): Promise<AxiosResponse<IPost>> => {
    return axios.post(`${API_URL}/posts/`, { ...payload });
  },
  updatePost: (payload: IUpdatePostPayload): Promise<AxiosResponse<IPost>> => {
    return axios.put(`${API_URL}/posts/${payload.id}`, { ...payload });
  },
  deleteCommentById: (commentId: number): Promise<AxiosResponse<IComment>> => {
    return axios.delete(`${API_URL}/comments/${commentId}`);
  },
  createComment: (
    payload: ICreateCommentPayload
  ): Promise<AxiosResponse<IComment>> => {
    return axios.post(`${API_URL}/comments/`, { ...payload });
  },
  updateComment: (
    payload: IUpdateCommentPayload
  ): Promise<AxiosResponse<IComment>> => {
    return axios.put(`${API_URL}/comments/${payload.id}`, { ...payload });
  },
};

export default postDatasource;
