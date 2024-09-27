import { AppContext } from './AppContext';
import { useContext } from 'react';
export default function DeleteButton() {
    const {setPValue } = useContext(AppContext);
    function delLast(){
      setPValue((prev) => prev.slice(0, -1)); 
    }

    return (
      <button onClick={delLast} className="rounded-full h-11 border-2 font-semibold text-xl px-4 py-1">Delete</button>
    )
  }
  