import React, { useEffect, useState } from "react";
import userService from "../domain/service/userService";
import { IUser } from "../_types/users.type";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [userData, setUserData] = useState<IUser[] | null>([]);

  const getAllUser = async () => {
    try {
      const data = await userService.getAllUsersService();
      if (data) {
        setUserData(data);
      } else {
        toast.error(`Can't Fetch User`);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
      <h2 className="text-center font-bold text-2xl mb-4">
        Please Select a User to See the details
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {userData?.map((user: IUser, index: number) => (
          <Link
            key={index}
            to={`/user/${user.id}`}
            className="user-card w-1/4 aspect-square flex items-center justify-center border-gray-500 border-2 rounded-lg"
          >
            <div className="user-card__wrapper flex flex-col items-center gap-5 p-2">
              <div className="user-card__image">
                <picture>
                  <img src="/vite.svg" alt="User" />
                </picture>
              </div>
              <div className="user-card__name">
                <h4 className="font-bold text-center">{user.name}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default UserPage;
