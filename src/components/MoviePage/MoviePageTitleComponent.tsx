import {FC} from "react";

type PropsType = {
    originalTitle: string,
    title: string
}

export const MoviePageTitleComponent: FC<PropsType> = ({originalTitle, title}) => {
    return (
        <div className='px-1'>
            <h1 className='text-6xl font-bold my-2 m-2'>
                {title}
            </h1>
            <h2 className='text-xl m-1'>
                {originalTitle}
            </h2>
        </div>
    );
};