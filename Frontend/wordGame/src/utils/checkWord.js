import axios from "axios";

function clientSideCheck(word, onResult, mainWord,wordList){
  if(word.length<=3){
    onResult({exists:false, word, length,msg:'Too Short'});
    return false;
  }
  if(!word.includes(mainWord[0])){
    onResult({exists:false, word, length,msg:"Missing Center Letter"});
    return false;
  }
  if(wordList.includes(word)){
    onResult({exists:false, word, length,msg:"Already found"});
    return false;
  }
  let containsMainOnly = [...word].every(char => mainWord.includes(char));
  if(!containsMainOnly){
    let msg = 'Invalid Word'
    onResult({exists:false, word, length, msg});
    return false;
  }
  return true;
}
export default function checkWord(word, onResult, mainWord, setValidWords,setPValue,setwordsLeft,wordList, setWordList ){
     if(!clientSideCheck(word,onResult, mainWord,wordList,setWordList)){
      return;
     }
    // Call the API when the button is clicked
    axios.get(`https://spellowl.onrender.com/checkWord/${word}`)
      .then(response => {   
        const exists = response.data.exists;
        let msg = '';
        if(!exists) msg = 'Invalid Word'
        let length = word.length;
        
        onResult({exists, word, length, msg},setValidWords,setPValue,setwordsLeft);
      })
      .catch(error => {
        console.error('Error fetching the word', error);
      });
  };