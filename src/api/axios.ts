import axios from "axios";
import {API} from "../constants/api";
import { storage } from "../services/storage.service";
import { STORAGE } from "../constants/storage";

const axiosInstance = axios.create({
    baseURL:API.BaSE_URL,
    timeout:10000,
});

axiosInstance.interceptors.request.use(config => {
    const token = storage.getString(STORAGE.TOKEN)

    if(token){
        config.headers.Authorization= `Bearer ${token}`;
    }
    return config;
})
export default axiosInstance