import React, { createContext, useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const ReaderContext = createContext();

export const ReaderProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('huki_reader_theme') || 'warm');
  const [fontSize, setFontSize] = useState(() => parseInt(localStorage.getItem('huki_reader_font_size') || '18', 10));
  const [currentChapter, setCurrentChapter] = useState(1);
  const [readingProgress, setReadingProgress] = useState(25);

  useEffect(() => {
    localStorage.setItem('huki_reader_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('huki_reader_font_size', fontSize);
  }, [fontSize]);

  const changeFontSize = (delta) => {
    setFontSize(prev => Math.max(14, Math.min(26, prev + delta)));
  };

  return (
    <ReaderContext.Provider value={{
      theme,
      setTheme,
      fontSize,
      changeFontSize,
      currentChapter,
      setCurrentChapter,
      readingProgress,
      setReadingProgress
    }}>
      {children}
    </ReaderContext.Provider>
  );
};

export const useReader = () => useContext(ReaderContext);
