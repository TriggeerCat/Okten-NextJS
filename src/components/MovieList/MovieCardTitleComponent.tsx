import {FC} from "react";

type PropsType = {
    title: string,
    originalTitle: string,
}

export const MovieCardTitleComponent: FC<PropsType> = ({title, originalTitle}) => {
    return (
        <div className='flex justify-center flex-col gap-1 px-2'>
            <h2 className='w-full font-bold'>
                {title}
            </h2>
            {
                originalTitle !== title
                    ? <div className='text-xs'><p>Original title:</p><p>{originalTitle}</p></div>
                    : null
            }
        </div>
    );
};