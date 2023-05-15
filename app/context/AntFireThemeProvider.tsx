import React, {createContext, useState} from 'react';
import {AppTheme, AppThemesTypes, getThemeFromType} from '../theme';

interface AntFireUiProps {
  Theme: AppTheme;
  ChangeTheme(theme: AppThemesTypes): void;
}

export const AntFireUiContext = createContext({} as AntFireUiProps);

export interface AntFireUiProviderProps {
  theme?: AppThemesTypes;
  children?: React.ReactNode;
}

export const AntFireThemeProvider = (props: AntFireUiProviderProps) => {
  const {children, theme} = props;
  // console.log('theme', theme);
  // console.log('childern', children);
  const [currentTheme, setCurrentTheme] = useState(
    theme ? getThemeFromType(theme) : getThemeFromType('light'),
  );
  // console.log(currentTheme, 'currentteheme');
  const ChangeTheme = (ThemeToChange: AppThemesTypes) => {
    setCurrentTheme(getThemeFromType(ThemeToChange));
  };

  return (
    <AntFireUiContext.Provider
      value={{
        Theme: currentTheme,
        ChangeTheme,
      }}>
      {children}
    </AntFireUiContext.Provider>
  );
};
