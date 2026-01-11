import {Genres} from "@/types/MovieFull";
import {FC} from "react";
import {GenreIcon} from "@/components/MovieList/GenreIconComponent";

type PropsType = {
    genre: Genres
}

export const GenreCardComponent: FC<PropsType> = ({genre}) => {
    return (
        <div className='bg-neutral-600 rounded-2xl flex p-2'>
            <span className='p-1'><GenreIcon id={genre.id}/></span>
            <span className='px-1'>{genre.name}</span>
        </div>
    );
};