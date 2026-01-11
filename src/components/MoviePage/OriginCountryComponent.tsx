import {FC} from "react";

type PropsType = { originCountry: string[] }

export const OriginCountryComponent: FC<PropsType> = ({originCountry}) => {
    return (
        <div className='border-t-1 border-t-neutral-400 pt-2'>
            Countr{originCountry.length === 1 ? 'y' : 'ies'} of origin: {originCountry.join(', ')}
        </div>
    );
};