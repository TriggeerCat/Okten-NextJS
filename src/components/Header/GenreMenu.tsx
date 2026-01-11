import {useCallback, useContext, useEffect, useState} from "react";
import {Genres} from "@/types/MovieFull";
import {getGenres} from "@/services/api.service";
import {FunctionalGenreCardComponent} from "@/components/Header/FunctionalGenreCardComponent";
import {GenreContext} from "@/context/GenreContext";

export const GenreMenu = () => {
    const [genres, setGenres] = useState<Genres[] | null>(null);
    const {clearAllGenres} = useContext(GenreContext)

    const refreshGenres = useCallback(async () => {
        const newGenres: Genres[] = await getGenres();
        setGenres(newGenres);
    }, [])

    useEffect(() => {
        refreshGenres().then()
    }, [refreshGenres]);

    const onClickHandler = () => {
        clearAllGenres();
    }

    return (
        <div className="absolute mt-20 bg-neutral-700 border shadow-lg rounded p-2 flex flex-wrap w-66/100">
            {
                genres?.map((value) => <FunctionalGenreCardComponent key={value.id} genre={value}/>)
            }
            <button onClick={onClickHandler} className='w-full hover:bg-neutral-800 p-2 rounded'>
                Reset
            </button>
        </div>
    );
};