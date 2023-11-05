import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [itemOffset, setItemOffset] = useState(0);

  return (
    <AppContext.Provider value={{ itemOffset, setItemOffset }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
