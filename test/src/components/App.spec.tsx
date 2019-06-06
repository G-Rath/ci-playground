import { App, CurrentThemeProvider } from '@src/components';
import { TestId } from '@src/components/App';
import { useCurrentThemeTypeState } from '@src/hooks';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { mocked } from 'ts-jest/utils';

jest.mock('@src/hooks/useCurrentThemeTypeState.ts');

const mockedUseCurrentThemeTypeState = mocked(useCurrentThemeTypeState);

const mockSetCurrentThemeType = jest.fn();

describe('App', () => {
  //#region it says "hello world"
  it('says "hello world"', () => {
    const { getByText } = render(<App />);

    getByText(/hello world/i);
  });
  //#endregion
  //#region when "IconButton" is pressed
  describe('when "IconButton" is pressed', () => {
    beforeEach(() => mockedUseCurrentThemeTypeState.mockReturnValue(['dark', mockSetCurrentThemeType]));

    //#region it toggles the theme type
    it('toggles the theme type', () => {
      const { getByTestId } = render(<App />, { wrapper: CurrentThemeProvider });

      fireEvent.click(getByTestId(TestId.ToggleThemeButton));

      expect(mockSetCurrentThemeType).toHaveBeenCalledWith('light');
    });
    //#endregion
  });
  //#endregion
});
