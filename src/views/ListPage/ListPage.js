import React from 'react';
import { Container} from '@material-ui/core';

import { useIndicators } from 'hooks/useIndicators';

import IndicatorList from 'components/IndicatorList/IndicatorList';
import Loading from 'components/Shared/Loading/Loading';
import Title from 'components/Shared/Title/Title';

export default function ListPage() {
  const { loading, indicators } = useIndicators();

  if (loading) return <Loading />;

  return (
    <>
      <Title align='start' label='Listado de Indicadores' variant='h3' />
      <Container>
        {indicators.length > 0 && <IndicatorList indicators={indicators} />}
      </Container>
    </>
  );
}
