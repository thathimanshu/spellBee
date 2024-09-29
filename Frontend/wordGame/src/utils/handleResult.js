import checkWord from './checkWord'

const handleWordResult = (res, setValidWords,setPValue,setwordsLeft,setWordList) => {
    console.log(res);
    if(res.exists){
      setValidWords((prevWords) => [...prevWords, res.word]);  // Add the valid word to the list
      setwordsLeft((w) => w-=1);
      setWordList((prevWords) => [...prevWords, res.word]);
    } 
    setPValue(()=>'')
  };

  export default function handleCheckWord(pValue, setPValue, mainWord, setValidWords,setwordsLeft,wordList, setWordList) {
    checkWord(pValue, (res) => handleWordResult(res, setValidWords, setPValue,setwordsLeft,setWordList), mainWord, setValidWords,setPValue,setwordsLeft,wordList, setWordList );
};