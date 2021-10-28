import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      background: '#0079C8',
      height: '70px',
    },
  })
);

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>Indicators - App</Typography>
      </Toolbar>
    </AppBar>
  );
}
