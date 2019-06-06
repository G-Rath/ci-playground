import { PaletteType } from '@material-ui/core';
import { AckamaLogo } from '@src/components';
import * as icons from '@src/theme/icons';
import { mockTheme } from '@test/setupMuiThemeMock';
import { render } from '@testing-library/react';
import React from 'react';

jest.mock('@src/theme/icons.tsx');
const actualIcons = jest.requireActual('@src/theme/icons.tsx');

/**
 * Due to the way `jest` mocking works, we have to spy on each function, to have its own implementation.
 *
 * It's weird - just roll with it.
 */
const mockIcons = () => (
  Object.keys(actualIcons) // icons end with "Icon"
        .filter((icon): icon is jest.FunctionPropertyNames<typeof icons> => icon.endsWith('Icon'))
        .forEach(icon => jest.spyOn(icons, icon).mockImplementation(actualIcons[icon]))
);

/**
 * Mocks the current theme to be one with the given `type`.
 *
 * @param {PaletteType} type
 *
 * @see mockTheme
 */
const mockThemeType = (type: PaletteType) => mockTheme({ palette: { type } });

describe('AckamaLogo', () => {
  beforeEach(() => mockIcons());

  //#region when "className" is provided
  describe('when "className" is provided', () => {
    //#region it adds the className to the root element
    it('adds the className to the root element', async () => {
      const className = 'my-css-class';

      const { container } = render(<AckamaLogo className={className} />);

      expect(container.firstChild).toHaveClass(className);
    });
    //#endregion
  });
  //#endregion
  //#region when "className" is not provided
  describe('when "className" is not provided', () => {
    //#region it does not add a className
    it('does not add a className', async () => {
      const { container } = render(<AckamaLogo />);

      expect(container.firstChild).not.toHaveClass('undefined');
    });
    //#endregion
  });
  //#endregion
  //#region when the theme type is "dark"
  describe('when the theme type is "dark"', () => {
    beforeEach(() => mockThemeType('dark'));

    //#region it uses the white logo
    it('uses the white logo', async () => {
      const spyForAckamaLogoWhiteIcon = jest.spyOn(icons, 'AckamaLogoWhiteIcon');

      render(<AckamaLogo />);

      expect(spyForAckamaLogoWhiteIcon).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
    });
    //#endregion
  });
  //#endregion
  //#region when the theme type is "light"
  describe('when the theme type is "light"', () => {
    beforeEach(() => mockThemeType('light'));

    //#region it uses the green logo
    it('uses the green logo', async () => {
      const spyForAckamaLogoGreenIcon = jest.spyOn(icons, 'AckamaLogoGreenIcon');

      render(<AckamaLogo />);

      expect(spyForAckamaLogoGreenIcon).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
    });
    //#endregion
  });
  //#endregion
});
