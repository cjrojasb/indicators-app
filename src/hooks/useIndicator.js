import { useState, useEffect } from 'react';
import { getIndicatoryByCode } from 'providers/Public/Provider';

export function useIndicator(code) {
  const [indicator, setIndicator] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getIndicatoryByCode(code)
      .then((res) => {
        console.log(res);
        setIndicator(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [code, setIndicator]);

  return { loading, indicator };
}
