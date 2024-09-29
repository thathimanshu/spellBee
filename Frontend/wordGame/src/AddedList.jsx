import { useContext, useState } from 'react';
import { AppContext } from './AppContext';

export default function AddedList() {
  const { validWords } = useContext(AppContext);  // Access valid words from context
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      {!isOpen && (
        <div className="sm:w-[420px] w-[95dvw] flex h-8 bg-[#eef2f8] dark:bg-[#4b525d] items-center justify-between rounded-lg">
          <p className="pl-2 text-slate-700 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">{validWords.join(', ')}
          </p>
          <span onClick={toggleList} className="material-symbols-outlined cursor-pointer pl-1 pr-1"> keyboard_arrow_down </span>
      </div>
      )
      }

      {isOpen && (
        <div className="sm:w-[420px] w-[95dvw] flex flex-wrap bg-[#eef2f8] dark:bg-[#4b525d] rounded-lg">
          <div className='flex justify-between w-full h-8 items-center'>
            <p className="pl-2 text-slate-700 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
              You have found <span className='font-bold'>{validWords.length} </span>words
            </p>
          <span onClick={toggleList} className="material-symbols-outlined cursor-pointer pl-1 pr-1"> keyboard_arrow_down </span>

          </div>
          <div className="flex flex-wrap w-full mt-2 pb-2 px-2 justify-between">
            {validWords.map((word, index) => (
              <span key={index} className="flex-none w-[30%] dark:border-black" style={{ borderBottom: '1px solid gray' }}>
                {index+1}. {word}
              </span>
            ))}
          </div>
        </div>
      )}

    </>
  )
}
