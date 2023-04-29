import React from "react";
import getUserInitials from "../../../utils/getUserInitials";
import { UserImage } from "../../../components/UserImage";
import type { TweetProps } from "../Tweet";

const TweetPreview: React.FC<TweetProps> = ({ tweet: { user, message } }) => {
  return (
    <div className="bg-black flex p-3 flex-col max-w-full mb-4 border-[0.4px] border-black-gray border-solid rounded-2xl mt-6">
      <div className="flex items-center">
        <UserImage size={"small"} />
        <div className="text-white m-0 ml-1 font-bold mr-1 items-center">
          {user.fullName}
        </div>
        <div className="text-gray ml-1"> {user.username} </div>
      </div>
      <div className="text-white text-sm mt-1 whitespace-pre-line">
        {" "}
        {message}{" "}
      </div>
    </div>
  );
};

export default TweetPreview;
