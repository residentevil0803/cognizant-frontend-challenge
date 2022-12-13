import React from "react";

interface HeaderButtonInterface {
  name: string;
}

const HeaderButton: React.FC<HeaderButtonInterface> = ({ name }) => {
  return (
    <button className='flex flex-row items-center'>
      <div className='md:text-sm text-lg text-specialGray hover:text-specialBlack'>{name}</div>
    </button>
  );
};

export default HeaderButton;
