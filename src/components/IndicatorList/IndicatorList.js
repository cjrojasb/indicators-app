import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  createStyles,
  IconButton,
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
import InfoIcon from '@material-ui/icons/Info';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Detail from 'components/Detail/Detail';
import DetailDialog from 'components/DetailDialog/DetailDialog';
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

export default function IndicatorList({ indicators }) {
  const [dialog, setDialog] = useState();
  const classes = useStyles();

  const handleDialog = (value) => {
    setDialog(dialog === value ? false : value);
  };

  return (
    <>
      <TableContainer component={Paper} className={classes.my3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCellHead> Indicador</TableCellHead>
              <TableCellHead>Unidad de Medida</TableCellHead>
              <TableCellHead>Fecha</TableCellHead>
              <TableCellHead align='center' colSpan='2'>
                Ver Más
              </TableCellHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {indicators.map((indicator, index) => (
              <Fragment key={index}>
                <TableRow key={indicator.codigo}>
                  <TableCell>{indicator.nombre} </TableCell>
                  <TableCell>{indicator.unidad_medida}</TableCell>
                  <TableCell>
                    <Date date={indicator.fecha} />
                  </TableCell>
                  <TableCell align='center'>
                    <IconButton
                      aria-label='dialog'
                      onClick={() => {
                        handleDialog(index);
                      }}
                    >
                      <InfoIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                    <IconButton
                      aria-label={`show_${indicator.codigo}`}
                      component={Link}
                      to={`/list/${indicator.codigo}`}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <DetailDialog
                  index={index}
                  key={index + 1}
                  onClose={handleDialog}
                  open={dialog}
                  title={indicator.nombre}
                >
                  <Detail indicator={indicator} />
                </DetailDialog>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
