import { PaletteType } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { CurrentThemeContext, CurrentThemeValue } from '@src/contexts';
import { useCurrentThemeTypeState } from '@src/hooks';
import { themes } from '@src/theme';
import React, { useCallback, useMemo } from 'react';

interface Props {
  children?: React.ReactNode;
}

export const CurrentThemeProvider = (props: Props) => {
  const [currentThemeType, setCurrentThemeType] = useCurrentThemeTypeState<PaletteType>('dark');

  const toggleThemeType = useCallback<CurrentThemeValue['toggleThemeType']>(() => {
    const themeType: PaletteType = currentThemeType === 'dark' ? 'light' : 'dark';

    setCurrentThemeType(themeType);
  }, [currentThemeType, setCurrentThemeType]);

  const providerValueMemo = useMemo<CurrentThemeValue>(() => ({
    currentThemeType,
    toggleThemeType
  }), [currentThemeType, toggleThemeType]);

  return (
    <ThemeProvider theme={themes[currentThemeType]}>
      <CurrentThemeContext.Provider value={providerValueMemo}>
        {props.children}
      </CurrentThemeContext.Provider>
    </ThemeProvider>
  );
};

CurrentThemeProvider.defaultProps = {};
