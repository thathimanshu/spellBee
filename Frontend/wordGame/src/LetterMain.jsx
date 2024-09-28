import { useContext  } from 'react';
import { AppContext } from './AppContext';

export default function LetterMain({ text }) {
  const {setPValue } = useContext(AppContext);

  const btnClick = (ch) => {
    setPValue((prev) => prev + ch);
  };
  
  return (
    <div onClick={() => btnClick(text)}  className='relative mx-auto w-[100px] h-[55px] hexagon m-4 ml-1 mr-1 cursor-pointer after:border-t-themeColor before:border-b-themeColor dark:after:border-t-themeColorDark dark:before:border-b-themeColorDark main'>
      <div
        className="flex items-center justify-center w-[100px] h-[55px] bg-themeColor dark:bg-themeColorDark">
        <span className="text-3xl font-bold text-black dark:text-white">{text}</span>
      </div>
    </div>
  );
}
