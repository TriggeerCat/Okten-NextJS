import {FC} from "react";

type PropsType = {
    posterPath: string
}

export const PosterPreviewComponent: FC<PropsType> = ({posterPath}) => {

    return (
        <div className='flex justify-center align-middle overflow-hidden'>
            <img className='rounded-2xl object-cover' src={"https://image.tmdb.org/t/p/w342" + posterPath} alt="😵"/>
        </div>
    );
};