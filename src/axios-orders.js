import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-app-c7467.firebaseio.com/'
});

export default instance;
