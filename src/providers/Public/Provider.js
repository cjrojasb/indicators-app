import { response } from './Client';

export const getIndicators = () => {
  const options = {
    url: '/api',
  };
  return response(options);
};

export const getIndicatoryByCode = (code) => {
  const options = {
    url: `/api/${code}`,
  };
  return response(options);
};
