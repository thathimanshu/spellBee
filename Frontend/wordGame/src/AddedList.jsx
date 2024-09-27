import { useContext } from 'react';
import { AppContext } from './AppContext';

export default function AddedList() {
  const { validWords } = useContext(AppContext);  // Access valid words from context

  return (
    <div className="sm:w-[420px] w-full flex h-8 bg-[#eef2f8] items-center justify-between">
        <p className="pl-2 text-slate-700">{validWords.join(', ')}</p>
        <span className="material-symbols-outlined cursor-pointer pr-1"> keyboard_arrow_down </span>
    </div>
  )
}
