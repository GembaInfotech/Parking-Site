import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const queryform = async ({values}) => {
  console.log(values, "testing....3");
  const response = await instance.post('/queries/query', {values});
  return response.data;
};