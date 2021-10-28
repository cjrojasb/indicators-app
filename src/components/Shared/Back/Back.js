import React from 'react';
import { Link } from 'react-router-dom';
import { Button, createStyles, makeStyles } from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles(() =>
  createStyles({
    my3: {
      margin: '2rem 0',
    },
  })
);

export default function Back() {
  const classes = useStyles();
  return (
    <Button
      color='primary'
      component={Link}
      startIcon={<ChevronLeftIcon />}
      to='/list'
      className={classes.my3}
    >
      Indicadores
    </Button>
  );
}
