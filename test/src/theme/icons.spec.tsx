import * as icons from '@src/theme/icons';
import { render } from '@testing-library/react';
import React from 'react';

describe('icons', () => {
  //#region describe each icon
  describe.each<[string, React.JSXElementConstructor<object>]>(
    Object.entries(icons)
  )('%s', (icon, Icon) => {
    it(`renders ${icon}`, () => {
      render(<Icon />);
    });
    it('ends with "Icon"', () => {
      expect(icon).toMatch(/Icon$/);
    });
  });
  //#endregion
});
