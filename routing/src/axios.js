import axios from 'axios';

const instance = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
});

instance.interceptors.request.use(request => {
  request.headers = {
    "Auth":"1234"
  };
  console.log("Instance", request);
  return request;
}, error => {
  return Promise.reject();
})

export default instance;