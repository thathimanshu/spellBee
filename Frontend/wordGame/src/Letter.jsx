import { useContext ,useEffect } from 'react';
import { AppContext } from './AppContext';

export default function Letter({ bgColor, text, className = "" }) {
  const {setPValue } = useContext(AppContext);

  const btnClick = (ch) => {
    setPValue((prev) => prev + ch);
  };
  
  return (
    <div onClick={() => btnClick(text)}  className={`relative mx-auto w-[100px] h-[55px] hexagon m-4 ml-1 mr-1 ${className} cursor-pointer`}>
      <div
        className="flex items-center justify-center w-[100px] h-[55px]"
        style={{ backgroundColor: bgColor }}  // Using inline style for dynamic bgColor
      >
        <span className="text-3xl font-bold text-black">{text}</span>
      </div>
    </div>
  );
}
