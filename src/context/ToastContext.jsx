import React, { createContext, useContext, useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  }, []);

  return (
    <ToastContext.Provider value={{ toastMessage, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
