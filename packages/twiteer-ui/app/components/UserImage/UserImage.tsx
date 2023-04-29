"use client";

import Image from "next/image";
import profilePic from "../../../public/images/userimage.jpg";

interface UserImageProps {
  size?: "small" | "medium" | "large";
}

const UserImage: React.FC<UserImageProps> = ({ size = "medium" }) => {
  return (
    <Image
      src={profilePic}
      width={50}
      height={50}
      alt="Picture of the author"
      className={`rounded-full 
      
      ${sizessss === "medium" ? "w-12 h-12" : "w-5 h-5"}`}
    />
  );
};

export default UserImage;
