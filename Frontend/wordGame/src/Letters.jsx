import Letter from './Letter.jsx'
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from './AppContext.jsx';

function Letters(){
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true); 
  const {setmainWord,setwordsLeft} = useContext(AppContext); 

  useEffect(() => {
    axios.get('https://spellowl.onrender.com/findWord')
      .then(response => {   
          const word = response.data.word.toUpperCase();
          setmainWord(() => word);
          setLetters(word.split('')); 
          setLoading(false); 
          console.log(word);
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
                <Letter bgColor={'#dfe6ed'} text={letters[5]}/>
                <Letter bgColor={'#dfe6ed'} text={letters[1]}/>
            </div>
            <div className='flex justify-center'>
                <Letter bgColor={'#dfe6ed'} text={letters[6]}/>
                <Letter bgColor={'#ffd924'} text={letters[3]} className='main'/>
                <Letter bgColor={'#dfe6ed'} text={letters[4]}/>
            </div>
            <div className='flex justify-center'>
                <Letter bgColor={'#dfe6ed'} text={letters[0]}/>
                <Letter bgColor={'#dfe6ed'} text={letters[2]}/>
            </div>
        </div>
    )
}
export default Letters