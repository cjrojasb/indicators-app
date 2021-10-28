import React from 'react';
import { Line } from 'react-chartjs-2';
import { Container } from '@material-ui/core';

import { useIndicators } from 'hooks/useIndicators';

import IndicatorList from 'components/IndicatorList/IndicatorList';
import Loading from 'components/Shared/Loading/Loading';
import Title from 'components/Shared/Title/Title';
import Date from 'components/Shared/Date/Date';

export default function ListPage() {
  const { loading, indicators } = useIndicators();
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const obg = {
    version: '1.7.0',
    autor: 'mindicador.cl',
    codigo: 'uf',
    nombre: 'Unidad de fomento (UF)',
    unidad_medida: 'Pesos',
    serie: [
      {
        fecha: '2021-10-27T03:00:00.000Z',
        valor: 30333.8,
      },
      {
        fecha: '2021-10-26T03:00:00.000Z',
        valor: 30322.13,
      },
      {
        fecha: '2021-10-25T03:00:00.000Z',
        valor: 30310.47,
      },
      {
        fecha: '2021-10-24T03:00:00.000Z',
        valor: 30298.81,
      },
      {
        fecha: '2021-10-23T03:00:00.000Z',
        valor: 30287.15,
      },
      {
        fecha: '2021-10-22T03:00:00.000Z',
        valor: 30275.5,
      },
      {
        fecha: '2021-10-21T03:00:00.000Z',
        valor: 30263.85,
      },
      {
        fecha: '2021-10-20T03:00:00.000Z',
        valor: 30252.21,
      },
    ],
  };

  if (loading) return <Loading />;

  return (
    <>
      <Title align='left' label='Listado de Indicadores' variant='h3' />
      <Container>
        {indicators.length > 0 && <IndicatorList indicators={indicators} />}
      </Container>
    </>
  );
}
