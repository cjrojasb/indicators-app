import React from 'react';

import { Container } from '@material-ui/core';

import { useIndicator } from 'hooks/useIndicator';

import Indicator from 'components/Indicator/Indicator';
import Back from 'components/Shared/Back/Back';
import Loading from 'components/Shared/Loading/Loading';
import Title from 'components/Shared/Title/Title';

export default function ShowPage({ match }) {
  const { loading, indicator } = useIndicator(match.params.code);

  if (loading) return <Loading />;

  return (
    <>
      <Title align='left' label={indicator.nombre} variant='h3' />
      <Container>
        <Back />
        <Indicator
          nombre={indicator.nombre}
          serie={indicator.serie}
          unidad_medida={indicator.unidad_medida}
          extraInfo={indicator}
        />
      </Container>
    </>
  );
}
