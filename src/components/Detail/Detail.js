import React from 'react';
import {
  Box,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Typography
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import Date from 'components/Shared/Date/Date';

const useStyles = makeStyles(() =>
  createStyles({
    boxDetail: {
    },
    value: {
      color: '#009EE0',
      fontSize: 30,
      fontWeight: 'bold',
    },
  })
);

export default function Detail({ indicator }) {
  const classes = useStyles();
  return (
    <Box className={classes.boxDetail}>
      <Typography align='center' variant='h3' className={classes.value}>
        $ {indicator.valor}
      </Typography>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={<ListSubheader component='div'>Detalles</ListSubheader>}
      >
        <ListItem>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary={indicator.nombre} secondary='Nombre' />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary={indicator.codigo} secondary='Código' />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Date date={indicator.fecha} />}
            secondary='Fecha'
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText
            primary={indicator.unidad_medida}
            secondary='Unidad de Medida'
          />
        </ListItem>
      </List>
    </Box>
  );
}
