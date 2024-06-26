import axios from 'axios';

const instance = axios.create({
  baseURL: '/v1/api',
});

export const contactform = async ({values}) => {
  const response = await instance.post('/contacts/contact', {values});
  return response.data;
};