import React from "react";

interface RegisterButtonInterface {
  name: string;
}

const RegisterButton: React.FC<RegisterButtonInterface> = ({ name }) => {
  return (
    <button className='md:w-26 w-full md:text-sm text-lg text-specialGray border-specialGray hover:text-specialBlack hover:border-specialBlack border-2 rounded-xl p-1'>
      {name}
    </button>
  );
};

export default RegisterButton;
