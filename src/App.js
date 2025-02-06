import logo from './logo.svg';
import './App.css';
import React, { createContext } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { useState } from 'react';
import { useContext } from 'react';


const themeContext = createContext();
const useTheme = () => useContext(themeContext);

const ThemeToggle = () => {
  const { theme, changeTheme } = useTheme();
  return (
    <button onClick={changeTheme}>Переключить тему</button>
  );
};

function App() {
  const [ theme, setTheme ] = useState('light');

  const changeTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <themeContext.Provider value={{ theme, changeTheme}}>
      <div className="App content" style={{ color: theme === 'light' ? 'black' : 'white', background: theme === 'light' ? 'white' : 'black' }}>
        <Router>
          <ThemeToggle />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </Router>
      </div>
    </themeContext.Provider>
  );
}



export default App;
