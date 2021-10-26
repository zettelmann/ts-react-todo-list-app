import React, { useState } from 'react'
import styles from './Header.module.scss'

const Header: React.FC<{ onSetTheme: (theme: string) => void }> = props => {
  const [theme, setTheme] = useState<string>('light')

  const onChangeTheme = () => {
    setTheme(prevTheme => {
      if(prevTheme === 'light') return prevTheme = 'dark';
      else return prevTheme = 'light';
    })

    props.onSetTheme(theme);
  }

  return (
    <header>
      <div className={styles.container}>
        <h1>TODO</h1>
        <button onClick={onChangeTheme}></button>
      </div>
    </header>
  )
}

export default Header;
