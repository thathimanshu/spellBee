import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pValue, setPValue] = useState("");
  const [validWords, setValidWords] = useState([]);
  const [mainWord, setmainWord] = useState([]);
  const [wordsLeft, setwordsLeft] = useState([]);
  const [wordList, setWordList] = useState([]);

  return (
    <AppContext.Provider value={{ pValue, setPValue, validWords, setValidWords, mainWord, setmainWord,wordsLeft, setwordsLeft,wordList, setWordList}}>
      {children}
    </AppContext.Provider>
  );
};
