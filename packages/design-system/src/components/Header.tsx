import React from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  showBackArrow?: boolean;
  label: string;
  handleBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  showBackArrow,
  label,
  handleBack,
}) => (
  <div className="border-b-[1px] border-neutral-800 p-5">
    <div className="flex flex-row items-center gap-2">
      {showBackArrow && handleBack && (
        <BiArrowBack
          onClick={handleBack}
          color="white"
          size={20}
          className="cursor-pointer hover:opacity-70 transition"
        />
      )}

      <h1 className="text-white text-xl font-semibold">{label}</h1>
    </div>
  </div>
);

export default Header;
