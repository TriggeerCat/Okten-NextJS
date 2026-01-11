import {Genres} from "@/types/MovieFull";
import {FC, useContext, useEffect, useState} from "react";
import {GenreIcon} from "@/components/MovieList/GenreIconComponent";
import {GenreContext} from "@/context/GenreContext";

type PropsType = {
    genre: Genres
}

export const FunctionalGenreCardComponent: FC<PropsType> = ({genre}) => {
    const {genres, clickGenre} = useContext(GenreContext);
    const [tint, setTint] = useState<boolean>(false);

    const onClickHandler = () => {
        clickGenre(genre.id);
    }

    useEffect(() => {
        if (genres.includes(genre.id)) {
            setTint(false);
        } else setTint(true);
    }, [genre.id, genres]);

    return (
        <div>
            <button onClick={onClickHandler}
                    className={tint ? 'flex hover:bg-neutral-800 p-2 rounded opacity-40' : 'flex hover:bg-neutral-800 p-2 rounded'}>
                <span className='p-1'><GenreIcon id={genre.id}/></span>
                <span className='px-1'>{genre.name}</span>
            </button>
        </div>
    );
};