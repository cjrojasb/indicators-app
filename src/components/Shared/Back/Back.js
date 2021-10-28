import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function Back() {
  return (
    <Button
      color='primary'
      component={Link}
      startIcon={<ChevronLeftIcon />}
      to='/list'
    >
      Indicadores
    </Button>
  );
}
