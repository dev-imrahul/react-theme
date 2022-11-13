import { createContext, FC, ReactNode, useCallback, useContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import INITIAL_THEME from "../components/styled/theme-const";

interface IRootContext {
  toogle?: () => void | undefined,
  themeType: 'dark' | 'light';
  theme: DefaultTheme
}
interface IRootProvider {
  children: ReactNode
}

export const RootContext = createContext<IRootContext>({
  themeType: 'light',
  theme: INITIAL_THEME({type: "light"})
});

export const RootProvider = ({children}:IRootProvider) => {
  const [toogleTheme, setToogleTheme] = useState<'light' | 'dark'>('light');
  const [theme, setTheme] = useState<DefaultTheme>(INITIAL_THEME({type: toogleTheme}));

  const themeToggleHandler = () => {
    setToogleTheme(prev => {
      switch(prev) {
        case 'dark': setTheme(INITIAL_THEME({type: 'light'}));
          return prev = 'light';
        default: setTheme(INITIAL_THEME({type: 'dark'}));
          return prev = 'dark'
      }
    })
  };

  return (
    <>
    <RootContext.Provider 
      value={{
        toogle: themeToggleHandler,
        themeType: toogleTheme,
        theme: theme
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </RootContext.Provider>
    </>
  )
}

export const useRoot = () => {
  return useContext(RootContext)
}