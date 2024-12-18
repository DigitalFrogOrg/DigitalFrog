import axios from 'axios';
import config from './config'; 

const apiClient = axios.create({
    baseURL: config.BASE_URL,
});

apiClient.interceptors.request.use(
    (request) => {
        console.log("request==>",request)
        if (request.data instanceof FormData) {
            delete request.headers['Content-Type']; 
        } else {
            request.headers['Content-Type'] = 'application/json';
        }
        return request;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Response Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default apiClient;
