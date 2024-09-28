import checkWord from './checkWord'

const handleWordResult = (res, setValidWords,setPValue) => {
    console.log(res);
    if(res.exists){
      setValidWords((prevWords) => [...prevWords, res.word]);  // Add the valid word to the list
    } 
    setPValue(()=>'')
  };

  export default function handleCheckWord(pValue, setPValue, mainWord, setValidWords) {
    checkWord(pValue, (res) => handleWordResult(res, setValidWords, setPValue), mainWord);  // Pass handleWordFound as a callback
};