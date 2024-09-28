import { useContext ,useEffect } from 'react';
import { AppContext } from './AppContext';
import checkWord from './utils/checkWord'
export default function TypedText() {
  const {mainWord, pValue, setPValue, setValidWords } = useContext(AppContext);

  
  useEffect(() => {

    const handleWordResult = (res) => {
      console.log(res);
      if(res.exists){
        setValidWords((prevWords) => [...prevWords, res.word]);  // Add the valid word to the list
      } 
      setPValue(()=>'')
    };
  
    const handleCheckWord  = () => {
      checkWord(pValue, handleWordResult, mainWord);  // Pass handleWordFound as a callback
    };
    const handleInput = (event) => {
      if(/^[a-zA-Z]$/.test(event.key))
        setPValue((prev) => prev + event.key.toUpperCase()); 
      else if(event.key === 'Backspace') {
        setPValue((prev) => prev.slice(0, -1)); 
      }
      else if(event.key ==='Enter'){
        handleCheckWord()
      }
    };

    
    window.addEventListener('keydown', handleInput);

    
    return () => {
      window.removeEventListener('keydown', handleInput);
    };
  }, [pValue, setPValue, setValidWords]);

  return (
    <div className="mt-6 sm:w-[420px] w-full flex justify-center align-center pl-1">
      <p className="font-bold text-4xl">{pValue}</p>
      <span className="text-themeColor dark:text-themeColorDark font-extrabold text-4xl animate-blink">|</span>
    </div>
  )
}
