import axios from "axios";

function clientSideCheck(word, onResult, mainWord){
  let False = false
  if(word.length<=3){
    let msg = 'Too Short'
    onResult({False, word, length,msg});
    return false;
  }

  let containsMainOnly = [...word].every(char => mainWord.includes(char));
  if(!containsMainOnly){
    let msg = 'Invalid Word'
    onResult({False, word, length, msg});
    return false;
  }
  return true;
}
export default function checkWord(word, onResult, mainWord){
     if(!clientSideCheck(word,onResult, mainWord)){
      return;
     }
    // Call the API when the button is clicked
    axios.get(`https://spellowl.onrender.com/checkWord/${word}`)
      .then(response => {   
        const exists = response.data.exists;
        let msg = '';
        if(!exists) msg = 'Invalid Word'
        let length = word.length;
        onResult({exists, word, length, msg});
      })
      .catch(error => {
        console.error('Error fetching the word', error);
      });
  };