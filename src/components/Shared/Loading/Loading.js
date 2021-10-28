import React from 'react';
import {
  Box,
  CircularProgress,
  createStyles,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    boxLoading: {
      minHeight: 'calc(100vh - 122px)',
    },
  })
);

export default function Loading() {
  const classes = useStyles();
  return (
    <Box
      alignItems='center'
      className={classes.boxLoading}
      display='flex'
      justifyContent='center'
    >
      <CircularProgress />
    </Box>
  );
}
