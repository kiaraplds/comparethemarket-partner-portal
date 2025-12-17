import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userTier, setUserTier] = useState('premium'); // 'premium' or 'basic'

  const isPremium = userTier === 'premium';
  const isBasic = userTier === 'basic';

  const switchToBasic = () => setUserTier('basic');
  const switchToPremium = () => setUserTier('premium');

  return (
    <UserContext.Provider
      value={{
        userTier,
        isPremium,
        isBasic,
        switchToBasic,
        switchToPremium,
        setUserTier,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

