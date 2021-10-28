import React from 'react';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';

import Back from 'components/Shared/Back/Back';

const useStyles = makeStyles(() =>
  createStyles({
    boxError: {
      minHeight: 'calc(100vh - 122px)',
      margin: '0 auto',
      maxWidth: 600,
    },
  })
);

export default function ErrorPage() {
  const classes = useStyles();
  return (
    <Box
      alignItems='center'
      className={classes.boxError}
      display='flex'
      justifyContent='center'
    >
      <Box>
        <Typography variant='h4' paragraph>
          404 | Página no disponible
        </Typography>
        <Typography variant='subtitle2' paragraph>
          Lo sentimos, la página no se encuentra disponible temporalmente,
          podría haber sido eliminada o su nombre ha sido cambiado.
        </Typography>
        <Typography variant='subtitle2'>
          Por favor regresar a la Página de Inicio
        </Typography>
        <Back />
      </Box>
    </Box>
  );
}
