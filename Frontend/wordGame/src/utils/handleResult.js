import checkWord from './checkWord'

const handleWordResult = (res, setValidWords,setPValue, setWordList) => {
    console.log(res);
    if(res.exists){
      setValidWords((prevWords) => [...prevWords, res.word]);  // Add the valid word to the list
    } 
    setPValue(()=>'')
    setWordList((prevList) => [...prevList, res.word]);
  };

  export default function handleCheckWord(pValue, setPValue, mainWord, setValidWords,wordList, setWordList) {
    checkWord(pValue, (res) => handleWordResult(res, setValidWords, setPValue,setWordList), mainWord);  // Pass handleWordFound as a callback
};