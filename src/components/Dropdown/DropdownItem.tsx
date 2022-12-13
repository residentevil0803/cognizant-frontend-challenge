import React from "react";

export interface DropdownItemInterface {
  name: string;
  iconSource?: string;
}

const DropdownItem: React.FC<DropdownItemInterface> = ({ name, iconSource }) => {
  return (
    <button className='flex flex-row items-center gap-2 group'>
      {iconSource && (
        <div className='w-6 flex justify-center items-center'>
          <img src={iconSource} className='w-4' alt='' />
        </div>
      )}
      <div className='md:text-sm text-lg text-specialGray group-hover:text-specialBlack whitespace-nowrap md:leading-7 leading-9'>
        {name}
      </div>
    </button>
  );
};

export default DropdownItem;
