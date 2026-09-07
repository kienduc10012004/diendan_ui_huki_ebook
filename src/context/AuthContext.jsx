import React, { createContext, useContext, useState } from 'react';
import { currentUser, sellerShop } from '../data/mockData';
import { Link, NavLink } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(currentUser);
  const [seller, setSeller] = useState(sellerShop);
  const [activeTab, setActiveTab] = useState('store'); // 'store' | 'community'

  return (
    <AuthContext.Provider value={{
      user,
      seller,
      activeTab,
      setActiveTab
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
