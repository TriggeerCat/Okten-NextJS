import {FC} from "react";

type PropsType = {
    tagline: string,
    overview: string
}

export const DescriptionComponent: FC<PropsType> = ({tagline, overview}) => {
    return (
        <div>
            <div className='text-xl m-2'>{tagline ? 'Tagline: ' + tagline : ''}</div>
            <div className='text-xl m-1'>{overview}</div>
        </div>
    );
};