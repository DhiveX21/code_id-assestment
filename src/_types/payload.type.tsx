export interface ICreatePostPayload {
  title: string;
  body: string;
  userId: number;
}

export interface IUpdatePostPayload {
  title: string;
  body: string;
  userId: number;
  id: number;
}
export interface ICreateCommentPayload {
  body: string;
  userId: number;
}

export interface IUpdateCommentPayload {
  body: string;
  userId: number;
  id: number;
}
