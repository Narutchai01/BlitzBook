import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL:'http://localhost:8000' || import.meta.env.REACT_APP_BACKEND_URL,
    withCredentials: true,   
});