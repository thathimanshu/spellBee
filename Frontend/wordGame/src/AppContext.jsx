import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pValue, setPValue] = useState("");
  const [validWords, setValidWords] = useState([]); // State for valid words
  const [mainWord, setmainWord] = useState([]); // State for valid words
  const [wordsLeft, setwordsLeft] = useState([]); // State for valid words

  return (
    <AppContext.Provider value={{ pValue, setPValue, validWords, setValidWords, mainWord, setmainWord,wordsLeft, setwordsLeft }}>
      {children}
    </AppContext.Provider>
  );
};
