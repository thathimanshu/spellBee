import { useContext } from 'react';
import { AppContext } from './AppContext';
import handleCheckWord from './utils/handleResult'

export default function EnterButton() {
  const { pValue,setPValue, setValidWords, mainWord } = useContext(AppContext); 

  function checkWord(){
    handleCheckWord(pValue, setPValue, mainWord, setValidWords);
  }
  return (
    <button 
      onClick={checkWord} // Directly call the renamed function
      className="rounded-full h-11 border-2 font-semibold text-xl px-4 py-1">
      Enter
    </button>
  );
}
