import {FC} from "react";

type PropsType = {releaseDate: string}

export const ReleaseDateComponent: FC<PropsType> = ({releaseDate}) => {
    return (
        <div className='border-t-1 border-t-neutral-400 pt-2'>
            <p>Release Date: {releaseDate}</p>
        </div>
    );
};