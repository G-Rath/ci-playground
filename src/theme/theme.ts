import { createMuiTheme, PaletteType, Theme } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

/**
 * Common options that are shared between all built themes.
 *
 * @type {ThemeOptions}
 */
const common: ThemeOptions = {
  palette: {
    primary: deepPurple,
    secondary: deepPurple
  }
};

/**
 * Builds a new theme, using the `common` `ThemeOptions` as a base.
 * The given `options` are merged in with the `common` options.
 *
 * @param {ThemeOptions} options
 *
 * @return {Theme}
 */
const buildTheme = (options: ThemeOptions) => createMuiTheme({ ...common, ...options });

/**
 * Collection of themes available to be used in this App.
 *
 * @type {Record<PaletteType, Theme>}
 */
export const themes: Record<PaletteType, Theme> = {
  dark: buildTheme({
    palette: {
      type: 'dark'
    }
  }),
  light: buildTheme({
    palette: {
      type: 'light'
    }
  })
};
