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
