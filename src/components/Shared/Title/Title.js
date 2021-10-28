import React from 'react';
import { Box, createStyles, makeStyles, Typography, Container} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    bgWhite: {
      background: '#FFFFFF',
    },
  })
);

export default function Title({ variant, align, label }) {
  const classes = useStyles();
  return (
    <Box
      className={classes.bgWhite}
      py={3}
    >
      <Container>
        <Typography align={align} variant={variant} gutterBottom>
          {label}
        </Typography>
      </Container>
    </Box>
  );
}
