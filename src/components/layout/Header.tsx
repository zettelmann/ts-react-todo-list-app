import React, { useContext } from 'react'
import styles from './Header.module.scss'
import { ThemeContext } from '../context/theme-context'

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext)

  const setThemeHandler = () => {
    themeContext.setTheme()
  }

  return (
    <header className={styles[`${themeContext.theme}`]}>
      <div className={styles.container}>
        <h1>TODO</h1>
        <button title="change theme" onClick={setThemeHandler} />
      </div>
    </header>
  )
}

export default Header;

