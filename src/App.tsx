import React, { useContext } from 'react';
import Header from './components/layout/Header';
import Tasks from './components/Tasks/Tasks';
import styles from './App.module.scss'
import { ThemeContext } from './components/context/theme-context';
import TaskContextProvider from './components/context/task-context';


const App = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <div className={styles[`${themeContext.theme}`]}>
      <Header />
      <TaskContextProvider>
        <Tasks />
      </TaskContextProvider>
    </div>
  );
}

export default App;

