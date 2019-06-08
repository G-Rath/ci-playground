import { Theme } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { AckamaLogoGreenIcon, AckamaLogoWhiteIcon } from '@src/theme';
import React from 'react';

export interface Props {
  children?: never;
  className: string | undefined;
}

const defaultProps: Pick<Props, 'className'> = {
  className: undefined
};

export const AckamaLogo = (props: Props) => {
  const theme = useTheme<Theme>();
  return (
    theme.palette.type === 'dark'
      ? <AckamaLogoWhiteIcon className={props.className} />
      : <AckamaLogoGreenIcon className={props.className} />
  );

};

AckamaLogo.defaultProps = defaultProps;
