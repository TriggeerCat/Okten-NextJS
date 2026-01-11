import {createContext} from "react";

type PropsType = {
    genres: number[],
    clickGenre: (genre: number) => void,
    clearAllGenres: () => void
}

export const GenreContext = createContext<PropsType>({
    genres: [],
    clickGenre: (genre: number) => console.log(genre),
    clearAllGenres: () => {}
})