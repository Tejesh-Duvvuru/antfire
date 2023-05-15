import {useContext} from 'react';
// import { SunlightenUiContext } from "../Context";
import {AntFireUiContext} from '../context';
export function useTheme() {
  //   const theme = useContext(AntFireThemeProvider).Theme;
  // console.log('calling useTheame function');
  // console.log('value', AntFireUiContext);
  const theme = useContext(AntFireUiContext).Theme;
  // console.log('theme', theme);
  if (!theme) {
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<SunlightenUiProvider />`',
    );
  }

  return theme;
}
