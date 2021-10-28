import React from 'react';
import {
  AppBar,
  createStyles,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      background: '#0079C8',
    },
  })
);

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar variant='dense'>
        <Typography variant='h6'>Indicators - App</Typography>
      </Toolbar>
    </AppBar>
  );
}
