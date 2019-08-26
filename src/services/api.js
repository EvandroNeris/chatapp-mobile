import { create } from 'apisauce';
import  AsyncStorage  from '@react-native-community/async-storage';

const dev = 'http://localhost:7002';
const beta = 'https://appchat-backend.herokuapp.com';

const api = create({
    baseURL: beta
});

api.addAsyncRequestTransform(request => async () => {
    const access = await AsyncStorage.getItem('token');
    console.log(access);
    request.headers['Cache-Control'] = 'no-cache';
  
    if (access) {
      request.headers.authorization = `Bearer ${access}`;
    }
});

export default api;