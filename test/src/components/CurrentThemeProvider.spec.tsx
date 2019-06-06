import { CurrentThemeProvider } from '@src/components';
import { CurrentThemeContext, CurrentThemeValue } from '@src/contexts';
import { useCurrentThemeTypeState } from '@src/hooks';
import { render } from '@testing-library/react';
import * as React from 'react';
import { mocked } from 'ts-jest/utils';

jest.mock('@src/hooks/useCurrentThemeTypeState.ts');

const mockedUseCurrentThemeTypeState = mocked(useCurrentThemeTypeState);

const mockSetCurrentThemeType = jest.fn();

describe('CurrentThemeProvider', () => {
  const buildTestTree = (testComponentFn: (value: CurrentThemeValue) => React.ReactNode) => (
    <CurrentThemeProvider>
      <CurrentThemeContext.Consumer>
        {testComponentFn}
      </CurrentThemeContext.Consumer>
    </CurrentThemeProvider>
  );

  beforeEach(() => mockedUseCurrentThemeTypeState.mockReturnValue(['dark', mockSetCurrentThemeType]));

  //#region it provides the type of the current theme
  it('provides the type of the current theme', async () => {
    const { getByText } = render(buildTestTree(value => `currentThemeType: ${value.currentThemeType}`));

    expect(getByText(/^currentThemeType:/)).toHaveTextContent(/: dark$/);
  });
  //#endregion
  //#region when "toggleThemeType" is called
  describe('when "toggleThemeType" is called', () => {
    //#region it toggles the theme type
    it('toggles the theme type', () => {
      render(buildTestTree(value => {
        value.toggleThemeType();

        return null;
      }));

      expect(mockSetCurrentThemeType).toHaveBeenCalledWith('light');
    });
    //#endregion
  });
  //#endregion
});
