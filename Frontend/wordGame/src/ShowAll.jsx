import { useEffect, useContext, useState } from "react";
import { AppContext } from './AppContext.jsx';
import axios from 'axios'; // Make sure axios is imported

export default function ShowAll() {
  const { mainWord } = useContext(AppContext); 
  const [dataRec, setDataRec] = useState([]); // Initialize state to store words
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    axios.get(`https://spellowl.onrender.com/getAllWords/${mainWord}`)
      .then(response => {   
        setDataRec(response.data.allWords); // Set the words in state
        setLoading(false); // Stop loading once data is fetched
      })
      .catch(error => {
        console.error('Error fetching the word', error);
        setLoading(false); 
      }); 
  }, [mainWord]); // Add mainWord as a dependency

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading text while fetching
      ) : (
        <div className="mt-4">
          {dataRec.map((word, index) => (
            <div key={index}>{word}</div> // Render each word inside the div
          ))}
        </div>
      )}
    </div>
  )
}
