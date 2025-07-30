import axios from "axios";
import {Car} from "@/types/Car";

const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v1"
});

export const getCars = async ():Promise<Car[]> => {
    const {data} = await axiosInstance.get<Car[]>('/cars');
    return data;
}

export const addCar = async (car: Car) => {
    await axiosInstance.post('/cars', car);
}