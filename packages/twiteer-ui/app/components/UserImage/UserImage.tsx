import React from "react";

interface UserImageProps {
  size: "small" | "medium" | "large";
  children: React.ReactNode;
}

const UserImage: React.FC<UserImageProps> = ({ size = "medium", children }) => {
  return (
    <figure className={`user-image user-image--${size}`}> {children} </figure>
  );
};

export default UserImage;
