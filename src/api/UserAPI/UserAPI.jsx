import axios from 'axios';


const instance = axios.create({
  baseURL: '/v1/api',
});

export const userData = async () => {

  const token = await JSON.parse(localStorage.getItem('token'))

   const response = await instance.get('/user/userData', {
    headers: {
        'Authorization': `Bearer ${token}` 
      }
  });
  return response;
};