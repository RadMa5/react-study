import logo from './logo.svg';
import './App.css';
import React, { createContext } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { useState } from 'react';
import { useContext } from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";


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
      <ThemeToggle />
      <div className="App content" style={{ color: theme === 'light' ? 'black' : 'white', background: theme === 'light' ? 'white' : 'black' }}>
        <div className="todo-app">
          <h1>Список заданий</h1>
          <AddTodo />
          <TodoList />
          <VisibilityFilters />
        </div>
      </div>
    </themeContext.Provider>
  );
}



export default App;
