import { useContext } from 'react';
import { AppContext } from './AppContext';

export default function AddedList() {
  const { validWords } = useContext(AppContext);  // Access valid words from context

  return (
    <div className="sm:w-[420px] w-[95dvw] flex h-8 bg-[#eef2f8] dark:bg-[#4b525d] items-center justify-between">
        <p className="pl-2 text-slate-700 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">{validWords.join(', ')}
        </p>
        <span className="material-symbols-outlined cursor-pointer pl-1 pr-1"> keyboard_arrow_down </span>
    </div>
  )
}
