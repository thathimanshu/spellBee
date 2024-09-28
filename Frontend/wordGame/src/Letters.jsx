import Letter from './Letter.jsx'
import LetterMain from './LetterMain.jsx'
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from './AppContext.jsx';
import randomizeString from './utils/randomizeString.js';
function Letters(){
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true); 
  const {setmainWord,setwordsLeft} = useContext(AppContext); 

  useEffect(() => {
    axios.get('https://spellowl.onrender.com/findWord')
      .then(response => {   
          const word = randomizeString(response.data.word.toUpperCase());
          setmainWord(() => word);
          setLetters(word.split('')); 
          setLoading(false); 
          axios.get(`https://spellowl.onrender.com/getNumOfPossibleWords/${word}`)
            .then(res2 => {   
                setwordsLeft(res2.data.totalPossible);
            })
            .catch(error => {
                console.error('Error fetching the word', error);
            });
      })
      .catch(error => {
        console.error('Error fetching the word', error);
        setLoading(false); 
      });

      
  }, []);  

    if (loading) {
        return (
        /* From Uiverse.io by devAaus */ 
            <div className="h-[350px] w-[350px]  flex-col gap-4 flex items-center justify-center">
                <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                    <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full">
                    </div>
                </div>
                    <p>Loading! Just need to wake up the servers from their nap. (Sometimes, it can take a minute)</p>
            </div>

        );
    }

    return (
        <div className='flex flex-col h-[350px] w-[350px] justify-center items-center'>
            <div className='flex justify-center'>
                <Letter text={letters[5]}/>
                <Letter text={letters[1]}/>
            </div>
            <div className='flex justify-center'>
                <Letter text={letters[6]}/>
                <LetterMain text={letters[0]}/>
                <Letter text={letters[4]}/>
            </div>
            <div className='flex justify-center'>
                <Letter text={letters[3]}/>
                <Letter text={letters[2]}/>
            </div>
        </div>
    )
}
export default Letters