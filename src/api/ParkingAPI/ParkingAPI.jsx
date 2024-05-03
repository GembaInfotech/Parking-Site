import axios from 'axios';

const instance = axios.create({
  baseURL: '/v1/api',
});

export const fetchParking = async ({radii, locationValue}) => {
  const radius = radii;
  console.log(locationValue)
  const response = await instance.get(`/parking/30.7055/76.8000/${radius}?reg=${locationValue}`);
  console.log(response);
  return response.data.parkings;  
};
