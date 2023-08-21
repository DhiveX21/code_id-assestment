/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm, SubmitHandler } from "react-hook-form";
import { IPost } from "../../_types/posts.type";
import { useEffect } from "react";

const EditPostModal = ({
  show = true,
  submitFunction,
  handleClose,
  selectedPost,
}: {
  show: boolean;
  submitFunction: (values: any) => any;
  handleClose: () => any;
  selectedPost: IPost | null;
}) => {
  type Inputs = {
    title: string;
    body: string;
  };
  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => submitFunction(data);

  useEffect(() => {
    if (selectedPost) {
      setValue("title", selectedPost?.title);
      setValue("body", selectedPost?.body);
    }
  }, [selectedPost]);

  return (
    <>
      {show && (
        <div className="fixed w-screen h-full top-0 left-0  p-20 ">
          <div className="bg-white w-full h-full rounded-[20px] flex flex-col items-center justify-center">
            <form
              className="w-full"
              onSubmit={handleSubmit(onSubmit)}
              action="#"
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="w-2/3 text-center flex flex-col">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    className="border-2 rounded-lg"
                    {...register("title")}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center ">
                <div className="w-2/3 text-center flex-col flex">
                  <label htmlFor="body">Body</label>
                  <textarea
                    rows={5}
                    id="body"
                    className="border-2 rounded-lg w-full"
                    {...register("body")}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4  gap-4">
                <button
                  className="bg-red-400 text-white"
                  type="button"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button className="bg-blue-400 text-white" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPostModal;
