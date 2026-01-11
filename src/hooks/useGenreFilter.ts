// import {useCallback, useMemo, useState} from "react";
//
// export const useGenreFilter = () => {
//
//     const addGenre = useCallback((genre: number) => {
//         const newGenres = selectedGenres;
//         const index = newGenres.indexOf(genre);
//         if (index === -1) {
//             newGenres.push(genre);
//             setGenreFilter(newGenres)
//         }
//     }, [selectedGenres])
//
//     const clearGenre = useCallback((genre: number) => {
//         const newGenres = selectedGenres;
//         const index = newGenres.indexOf(genre);
//
//         if (index !== -1) newGenres.splice(newGenres.indexOf(genre), 1);
//     }, [selectedGenres]);
//
//     const clearAllGenres = useCallback(() => {
//         setGenreFilter([]);
//     }, []);
//
//
//
//     return {selectedGenres, addGenre, clearGenre, clearAllGenres}
// }