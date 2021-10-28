import React from 'react';

import { useIndicator } from 'hooks/useIndicator';

import Back from 'components/Shared/Back/Back';
import Indicator from 'components/Indicator/Indicator';
import Loading from 'components/Shared/Loading/Loading';
import Title from 'components/Shared/Title/Title';

export default function ShowPage({ match }) {
  const { loading, indicator } = useIndicator(match.params.code);

  if (loading) return <Loading />;

  return (
    <>
      <Back />
      <Title align='center' label={indicator.nombre} variant='h4' />
      <Indicator
        nombre={indicator.nombre}
        serie={indicator.serie}
        unidad_medida={indicator.unidad_medida}
        extraInfo={indicator}
      />
    </>
  );
}
