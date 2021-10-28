import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import moment from 'moment';

import {
  Box,
  createStyles,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';

import { useIndicator } from 'hooks/useIndicator';

import Loading from 'components/Shared/Loading/Loading';

const useStyles = makeStyles(() =>
  createStyles({
    boxDetail: {},
    value: {
      color: '#009EE0',
      fontSize: 30,
      fontWeight: 'bold',
    },
  })
);

export default function Chart({ code }) {
  const [chartType, setChartType] = useState(0);
  const { loading, indicator } = useIndicator(code);
  const classes = useStyles();
  const types = [
    {
      value: 0,
      name: 'Gráfico de líneas',
    },
    {
      value: 1,
      name: 'Gráfico de barras',
    },
  ];

  const setChartData = (data) => {
    return {
      labels: data.serie
        .slice(Math.max(data.serie.length - 10, 0))
        .map((data) => moment(data.fecha, 'YYYY-MM-DD').format('DD/MM/YYYY')),
      datasets: [
        {
          label: 'Valor Indicadores',
          data: indicator.serie
            .slice(Math.max(indicator.serie.length - 10, 0))
            .map((data) => Math.round(data.valor)),
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };
  };

  const handleChartType = (event) => {
    setChartType(event.target.value);
  };

  if (loading || indicator.length === 0) return <Loading />;

  return (
    <Box className={classes.boxDetail}>
      <Typography variant='h6' gutterBottom>
        Selecione el tipo de gráfico
      </Typography>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={chartType}
        onChange={handleChartType}
      >
        {types.map((type, index) => (
          <MenuItem key={index} value={type.value}>
            {type.name}
          </MenuItem>
        ))}
      </Select>
      <Box py={3}>
        {chartType === 0 ? (
          <Line data={setChartData(indicator)} height={200} />
        ) : (
          <Bar data={setChartData(indicator)} height={200} />
        )}
      </Box>
    </Box>
  );
}
