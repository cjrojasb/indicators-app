import { useState, useEffect } from 'react';
import { getIndicators } from 'providers/Public/Provider';

export function useIndicators() {
  const [indicators, setIndicators] = useState([]);
  const [loading, setLoading] = useState(false);

  const setIndicatorsValue = (obj) => {
    let arr = [];

    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        arr.push(obj[key]);
      }
    }

    setIndicators(arr);
  };

  useEffect(() => {
    setLoading(true);
    getIndicators()
      .then((res) => {
        console.log(res);
        setIndicatorsValue(res);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setIndicators]);

  return { loading, indicators };
}
