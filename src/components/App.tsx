import { IconButton, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AckamaLogo } from '@src/components';
import { CurrentThemeContext } from '@src/contexts';
import React, { useContext } from 'react';

interface Props {
  children?: never;
}

/** @internal */
export enum TestId {
  ToggleThemeButton = 'toggle-theme-button'
}

const useStyles = makeStyles({
  root: {
    width: '25%',
    margin: 'auto',
    marginTop: '50px',
    textAlign: 'center'
  },
  icon: {
    width: '100%',
    height: 'auto'
  }
}, { name: 'App' });

export const App = (props: Props) => {
  const classes = useStyles(props);

  const {
    toggleThemeType: handleIconButtonClick
  } = useContext(CurrentThemeContext);

  return (
    <Paper className={classes.root}>
      <Typography>
        Hello World!
      </Typography>
      <IconButton
        data-testid={TestId.ToggleThemeButton}

        onClick={handleIconButtonClick}
      >
        <AckamaLogo className={classes.icon} />
      </IconButton>
    </Paper>
  );
};

App.defaultProps = {};
