import { useState } from "react";
import { IUser } from "../_types/users.type";
import userService from "../domain/service/userService";
import { toast } from "react-hot-toast";
import { IPost } from "../_types/posts.type";
import { IAlbum } from "../_types/albums.type";
import postService from "../domain/service/postService";
import { ICreatePostPayload, IUpdatePostPayload } from "../_types/payload.type";

const useUserDetail = () => {
  const [userData, setUserData] = useState<IUser | null>();
  const [postData, setPostData] = useState<IPost[] | null>();
  const [albumData, setAlbumData] = useState<IAlbum[] | null>();
  const getDetailUser = async (idUser: number) => {
    try {
      const data = await userService.getDetailUserService(idUser);
      if (data) {
        setUserData(data);
      } else {
        toast.error(`Can't Fetch User`);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };
  const getPostByUser = async (idUser: number) => {
    try {
      const data = await userService.getAllPostsByUserIdService(idUser);
      if (data) {
        setPostData(data);
      } else {
        toast.error(`Can't Fetch Post's`);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };
  const getAlbumByUser = async (idUser: number) => {
    try {
      const data = await userService.getAllAlbumsByUserIdService(idUser);
      if (data) {
        setAlbumData(data);
      } else {
        toast.error(`Can't Fetch Album's`);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  const handleDeletePost = async (postId: number) => {
    try {
      await postService.deletePostByIdService(postId);
      toast.success(
        "Success Delete, But this is only fake Delete from this API"
      );
    } catch (error) {
      toast.error(String(error));
    }
  };
  const handleAddPost = async (payload: ICreatePostPayload) => {
    try {
      await postService.createPostService(payload);
      toast.success(
        "Success Create, But this is only fake Create from this API"
      );
    } catch (error) {
      toast.error(String(error));
    }
  };
  const handleEditPost = async (payload: IUpdatePostPayload) => {
    try {
      await postService.updatePostService(payload);
      toast.success(
        "Success Update, But this is only fake Update from this API"
      );
    } catch (error) {
      toast.error(String(error));
    }
  };

  return {
    getDetailUser,
    userData,
    getPostByUser,
    postData,
    getAlbumByUser,
    albumData,
    handleDeletePost,
    handleAddPost,
    handleEditPost,
  };
};

export default useUserDetail;
