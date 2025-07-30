'use client'

import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "@/validators/car.validator";
import {Car} from "@/types/Car";
import Form from "next/form";
import {postCarFromForm} from "@/actions/serverActions";

const FormPage = () => {
    const {register, formState: {errors, isValid}} = useForm<Car>({mode: 'all', resolver: joiResolver(carValidator)});

    return (
        <Form action={postCarFromForm} className='flex flex-col text-xl gap-3 mx-auto my-10 max-w-100'>
            <label className="flex flex-col">
                <input type='text' className='border-2' {...register('brand')} placeholder='Kia'></input>
                <div>{errors.brand && <span>{errors.brand.message}</span>}</div>
            </label>
            <label className="flex flex-col">
                <input type='text' className='border-2' {...register('year')} placeholder='2007'></input>
                <div>{errors.year && <span>{errors.year.message}</span>}</div>
            </label>
            <label className="flex flex-col">
                <input type='text' className='border-2' {...register('price')} placeholder='100'></input>
                <div>{errors.price && <span>{errors.price.message}</span>}</div>
            </label>
            <button disabled={!isValid} className='border-2'>Send</button>
        </Form>
    );
};

export default FormPage;