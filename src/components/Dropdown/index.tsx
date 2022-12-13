import React, { useEffect, useRef, useState } from "react";
import IconArrowDown from "assets/images/icon-arrow-down.svg";
import IconArrowUp from "assets/images/icon-arrow-up.svg";

interface DropdownInterface {
  name: string;
  children?: JSX.Element[];
  className?: string;
}

const Dropdown: React.FC<DropdownInterface> = ({ name, children, className }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDropDownOpened, setDropDwonOpen] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setDropDwonOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className='md:relative static inline-block'>
      <button
        onClick={() => {
          setDropDwonOpen(!isDropDownOpened);
        }}
        className='flex flex-row items-center gap-2 group'
      >
        <div className='md:text-sm text-lg text-specialGray group-hover:text-specialBlack'>
          {name}
        </div>
        <img src={isDropDownOpened ? IconArrowUp : IconArrowDown} alt='' />
      </button>
      <div
        className={`${
          isDropDownOpened ? "block" : "hidden"
        } md:shadow-2xl shadow-none bg-white rounded-lg md:absolute static top-10 ${className} md:p-7 p-2 animation-fadeIn`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
