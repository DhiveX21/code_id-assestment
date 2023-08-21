import axios, { AxiosResponse } from "axios";
import { IPost } from "../../_types/posts.type";
import { IPostDatasource } from "./postDatasource.type";
import { IComment } from "../../_types/comments.type";

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
};

export default postDatasource;