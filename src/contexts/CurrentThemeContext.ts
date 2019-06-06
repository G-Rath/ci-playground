import { PaletteType } from '@material-ui/core';
import React from 'react';

export interface CurrentThemeValue {
  /**
   * The palette type of the theme currently in use.
   */
  currentThemeType: PaletteType;
  /**
   * Toggles the palette type of the current theme between `light` and `dark`.
   */
  toggleThemeType: () => void;
}

export const CurrentThemeContext = React.createContext<CurrentThemeValue>({
  currentThemeType: 'dark',
  toggleThemeType: () => {}
});
