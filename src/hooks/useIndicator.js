import { useState, useEffect } from 'react';
import { getIndicatoryByCode } from 'providers/Public/Provider';

export function useIndicator(code) {
  const [indicator, setIndicator] = useState({});
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    getIndicatoryByCode(code)
      .then((res) => {
        console.log(res);
        if (res !== undefined) {
          setIndicator(res);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [code, setIndicator]);

  return { loading, indicator, notFound };
}
