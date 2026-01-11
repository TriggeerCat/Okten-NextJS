import {FC} from "react";

type PropsType = {rating: number}

export const RatingComponent: FC<PropsType> = ({rating}) => {
    return (
        <div className='px-1 align-bottom'>
            {rating.toFixed(2)}/10
        </div>
    );
};