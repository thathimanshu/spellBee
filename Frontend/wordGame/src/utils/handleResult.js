import { triggerNotification } from './external';


import checkWord from './checkWord'

const handleWordResult = (res, setValidWords,setwordsLeft,setWordList) => {
    if(res.exists){
      setValidWords((prevWords) => [...prevWords, res.word]);  // Add the valid word to the list
      setwordsLeft((w) => w-=1);
      setWordList((prevWords) => [...prevWords, res.word]);
      let idx = res.length-3;
      let comp = ['Good!', 'Great','Impressive', 'Brilliant','Outstanding'];
      let msg2 = comp[Math.min(idx-1,4)];
      triggerNotification(msg2,res.exists,idx);  // This will trigger the notification
    }  else{
      triggerNotification(res.msg,res.exists);  // This will trigger the notification
    }
  };

  export default function handleCheckWord(pValue, setPValue, mainWord, setValidWords,setwordsLeft,wordList, setWordList) {
    let val = pValue;
    setPValue(()=>'');
    checkWord(val, (res) => handleWordResult(res, setValidWords,setwordsLeft,setWordList), mainWord, setValidWords,setwordsLeft,wordList, setWordList );
};