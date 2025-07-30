'use server';

import {addCar} from "@/services/api.service";
import {Car} from "@/types/Car";

export const postCarFromForm= async (formData: FormData) => {
    const formObject = Object.fromEntries(formData);
    const car: Car = {
        brand: formObject?.brand.toString() ?? 'Kia',
        year: +formObject?.year,
        price: +formObject?.price
    }
    await addCar(car);
}