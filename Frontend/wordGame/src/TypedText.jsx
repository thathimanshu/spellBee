import { useContext ,useEffect } from 'react';
import { AppContext } from './AppContext';
import handleCheckWord from './utils/handleResult'
export default function TypedText() {
const {mainWord, pValue, setPValue, setValidWords,setwordsLeft,wordList, setWordList } = useContext(AppContext);

  
  useEffect(() => {
    const handleInput = (event) => {
      if(/^[a-zA-Z]$/.test(event.key))
        setPValue((prev) => prev + event.key.toUpperCase()); 
      else if(event.key === 'Backspace') {
        setPValue((prev) => prev.slice(0, -1)); 
      }
      else if(event.key ==='Enter'){
        handleCheckWord(pValue, setPValue, mainWord, setValidWords,setwordsLeft,wordList, setWordList);
      }
    };
    window.addEventListener('keydown', handleInput);
    return () => {
      window.removeEventListener('keydown', handleInput);
    };
  }, [pValue, setPValue, setValidWords,mainWord,setwordsLeft]);

  return (
    <div className="mt-6 sm:w-[420px] w-full flex justify-center align-center pl-1">
      <p className="font-bold text-4xl">{pValue}</p>
      <span className="text-themeColor dark:text-themeColorDark font-extrabold text-4xl animate-blink">|</span>
    </div>
  )
}
