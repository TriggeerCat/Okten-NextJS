'use client'

import {GenreContext} from "@/context/GenreContext";
import {useCallback, useState} from "react";

export default function GenreContextProvider({children}: { children: React.ReactNode }) {
    const [genreFilter, setGenreFilter] = useState<number[]>([]);

    return (
        <GenreContext.Provider value={{
            genres: genreFilter,
            clickGenre: useCallback((genre: number) => {
                const newGenres = [...genreFilter];
                const index = newGenres.indexOf(genre);
                if (index === -1) {
                    newGenres.push(genre);
                } else newGenres.splice(newGenres.indexOf(genre), 1);
                setGenreFilter(newGenres);
            }, [genreFilter]),
            clearAllGenres: useCallback(() => {
                setGenreFilter([]);
            }, [])
        }}>
            {children}
        </GenreContext.Provider>
    );
}
