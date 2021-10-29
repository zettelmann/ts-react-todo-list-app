import React, { useContext } from 'react';
import Header from './components/layout/Header';
import Tasks from './components/Tasks/Tasks';
import styles from './App.module.scss'
import { ThemeContext } from './components/context/theme-context';

const App = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <div className={styles[`${themeContext.theme}`]}>
      <Header />
      <Tasks />
    </div>
  );
}

export default App;


