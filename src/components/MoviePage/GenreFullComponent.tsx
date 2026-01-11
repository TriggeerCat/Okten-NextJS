import {Genres} from "@/types/MovieFull";
import {FC} from "react";
import {GenreCardComponent} from "@/components/MoviePage/GenreCardComponent";

type PropsType = { genres: Genres[] }

export const GenreFullComponent: FC<PropsType> = ({genres}) => {
    return (
        <div className='px-12 py-6 flex flex-wrap gap-5'>
            {genres.map((value) => <GenreCardComponent key={value.id} genre={value}/>)}
        </div>
    );
};