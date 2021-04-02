import dotenv from 'dotenv';
import axios from "axios";
dotenv.config();
console.log(process.env.REACT_APP_API_KEY)
axios.interceptors.request.use((config) => {
    config.headers['X-Auth-token'] = process.env.REACT_APP_API_KEY;
    return config;
})

export {axios}