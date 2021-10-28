import React, { Fragment, useState, useCallback } from 'react';
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
import TimelineIcon from '@material-ui/icons/Timeline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Detail from 'components/Detail/Detail';
import Chart from 'components/Chart/Chart';
import CustomDialog from 'components/CustomDialog/CustomDialog';
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
  const [detailDialog, setDetailDialog] = useState();
  const [chartDialog, setChartDialog] = useState();
  const classes = useStyles();

  const handleDetailDialog = useCallback(
    (value) => {
      setDetailDialog(detailDialog === value ? false : value);
    },
    [detailDialog]
  );

  const handleChartDialog = useCallback(
    (value) => {
      setChartDialog(chartDialog === value ? false : value);
    },
    [chartDialog]
  );

  const renderList = () => {
    return indicators.map((indicator, index) => (
      <Fragment key={index}>
        <TableRow key={indicator.codigo}>
          <TableCell>{indicator.nombre} </TableCell>
          <TableCell>{indicator.unidad_medida}</TableCell>
          <TableCell>
            <Date date={indicator.fecha} />
          </TableCell>
          <TableCell align='center'>
            <IconButton
              aria-label='detail-dialog'
              onClick={() => {
                handleDetailDialog(index);
              }}
            >
              <InfoIcon />
            </IconButton>
          </TableCell>
          <TableCell align='center'>
            <IconButton
              aria-label='chart-dialog'
              onClick={() => {
                handleChartDialog(index);
              }}
            >
              <TimelineIcon />
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
        {detailDialog === index && (
          <CustomDialog
            index={index}
            key={index}
            onClose={handleDetailDialog}
            open={detailDialog}
            title={indicator.nombre}
          >
            <Detail indicator={indicator} />
          </CustomDialog>
        )}
        {chartDialog === index && (
          <CustomDialog
            index={index}
            key={index + 1}
            onClose={handleChartDialog}
            open={chartDialog}
            title={indicator.nombre}
          >
            <Chart code={indicator.codigo} />
          </CustomDialog>
        )}
      </Fragment>
    ));
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
              <TableCellHead align='center' colSpan='3'>
                Acciones
              </TableCellHead>
            </TableRow>
          </TableHead>
          <TableBody>{renderList()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
