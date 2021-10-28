import React from 'react';
import {
  createStyles,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from '@material-ui/core';

import Date from 'components/Shared/Date/Date';

const TableCellHead = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: '#008589',
      color: theme.palette.common.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
  })
)(TableCell);

const useStyles = makeStyles({
  my3: {
    margin: '3rem 0',
  },
});

export default function Indicator({ nombre, serie, unidad_medida, ...rest }) {
  const classes = useStyles();

  return (
    serie !== undefined && (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCellHead>Fecha</TableCellHead>
              <TableCellHead align='right'>Valor</TableCellHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {serie.map((data, key) => (
              <TableRow key={key}>
                <TableCell component='th' scope='data'>
                  <Date date={data.fecha} />
                </TableCell>
                <TableCell align='right' component='th' scope='data'>
                  {data.valor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}
