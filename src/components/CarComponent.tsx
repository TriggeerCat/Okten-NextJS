import {Car} from "@/types/Car";
import {FC} from "react";

type PropsType = {
    car: Car
}

export const CarComponent: FC<PropsType> = ({car}) => {
    return (
        <>
            {car.id}. {car.brand} {car.year}, {car.price}$
        </>
    );
};