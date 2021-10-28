import axios from 'axios';
// process.env.REACT_APP_API_URL
let apiUrl = 'https://mindicador.cl';

const client = axios.create({
  baseURL: `${apiUrl}`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const response = async (options) => {
  return await client(options)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => console.error('error', error));
};

export default client;
