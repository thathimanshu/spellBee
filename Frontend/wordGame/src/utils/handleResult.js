import checkWord from './checkWord'

const handleWordResult = (res, setValidWords,setPValue,setwordsLeft) => {
    console.log(res);
    if(res.exists){
      setValidWords((prevWords) => [...prevWords, res.word]);  // Add the valid word to the list
      setwordsLeft((w) => w-=1);
    } 
    setPValue(()=>'')
  };

  export default function handleCheckWord(pValue, setPValue, mainWord, setValidWords,setwordsLeft) {
    checkWord(pValue, (res) => handleWordResult(res, setValidWords, setPValue,setwordsLeft), mainWord);  // Pass handleWordFound as a callback
};