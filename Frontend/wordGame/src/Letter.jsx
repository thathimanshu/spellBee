import { useContext  } from 'react';
import { AppContext } from './AppContext';

export default function Letter({text}) {
  const {setPValue } = useContext(AppContext);

  const btnClick = (ch) => {
    setPValue((prev) => prev + ch);
  };
  
  return (
    <div onClick={() => btnClick(text)}  className='relative mx-auto w-[100px] h-[55px] hexagon m-4 ml-1 mr-1 cursor-pointer bg-[#dfe6ed] dark:bg-[#2f3247] dark:after:border-t-[#2f3247] dark:before:border-b-[#2f3247]'>
      <div
        className="flex items-center justify-center w-[100px] h-[55px]" >
        <span className="text-3xl font-bold text-black dark:text-white">{text}</span>
      </div>
    </div>
  );
}
