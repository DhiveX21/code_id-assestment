/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm, SubmitHandler } from "react-hook-form";

const AddCommentModal = ({
  show = true,
  submitFunction,
  handleClose,
}: {
  show: boolean;
  submitFunction: (values: any) => any;
  handleClose: () => any;
}) => {
  type Inputs = {
    body: string;
  };
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => submitFunction(data);

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

export default AddCommentModal;
