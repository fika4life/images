import { createContext, useContext, useState } from 'react';

//create the context
const AppContext = createContext();

// the context component that will wrap the app content
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('cats');

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setisDarkTheme(newTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newTheme);
    console.log(body);
  };
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

//create hook that allows  context use
export const useGlobalContext = () => useContext(AppContext);
