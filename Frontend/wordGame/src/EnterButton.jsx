import { useContext } from 'react';
import { AppContext } from './AppContext';
import checkWord from './utils/checkWord'

export default function EnterButton() {
  const { pValue, setValidWords, mainWord } = useContext(AppContext); 

  const handleWordResult = (res) => {
    if(res.exists)
    setValidWords((prevWords) => [...prevWords, res.word]);  // Add the valid word to the list
  };
  const handleCheckWord  = () => {
    checkWord(pValue, handleWordResult,mainWord);  // Pass handleWordFound as a callback
  };

  return (
    <button 
      onClick={handleCheckWord} // Directly call the renamed function
      className="rounded-full border-2 font-semibold text-xl px-4 py-1">
      Enter
    </button>
  );
}
