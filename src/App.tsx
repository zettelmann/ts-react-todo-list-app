import { useState } from 'react';
import styles from './App.module.scss';
import Header from './components/layout/Header';
import Tasks from './components/Tasks/Tasks';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('light')

  const setThemeHandler = (theme: string) => {
    setTheme(theme)
  }
  
  return (
    <div className={styles[`theme--${theme}`]}>
      <Header onSetTheme={setThemeHandler} />
      <Tasks />
    </div>
  );
}

export default App;
