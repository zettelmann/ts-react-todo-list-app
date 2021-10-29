import React, { useState } from "react"

type ThemeObj = {
  theme: string,
  setTheme: () => void
}

export const ThemeContext = React.createContext<ThemeObj>({
  theme: '',
  setTheme: () => {}
});

const ThemeContextProvider: React.FC = props => {
  const [theme, setTheme] = useState<string>('light');

  const setThemeHandler = () => {
    if(theme === 'light') { 
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  console.log(theme);

  const contextValue = {
    theme: theme,
    setTheme: setThemeHandler
  }

  return <ThemeContext.Provider value={contextValue}>
    {props.children}
  </ThemeContext.Provider>
}

export default ThemeContextProvider;