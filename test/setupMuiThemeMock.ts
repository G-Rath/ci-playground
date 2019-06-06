import { createMuiTheme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { useTheme } from '@material-ui/styles';
import { mocked } from 'ts-jest/utils';

/*
 * Sets up mocks for MUIs theme system, so that components using themes work in
 * tests without having to actually worry about components using themes.
 *
 * The theme can be adjusted in tests by calling `mockTheme`.
 * This makes it easy to test theme-related behaviour.
 */

jest.mock('@material-ui/styles/useTheme');

const mockedUseTheme = mocked(useTheme);

/**
 * Mocks the MUI theme with the given `options`.
 *
 * @param {ThemeOptions} options
 */
export const mockTheme = (options?: ThemeOptions) => {
  const theme = createMuiTheme(options);

  mockedUseTheme.mockReturnValue(theme);
};

// mock default theme
beforeEach(() => mockTheme());
