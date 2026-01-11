'use client'

import {useCallback, useEffect, useState} from "react";
import {getMovieList, getMovieListBySearch} from "@/services/api.service";
import {MovieShortened} from "@/types/MovieShortened";
import {PaginationControllerComponent} from "@/components/MovieList/PaginationControllerComponent";
import {MovieListCardComponent} from "@/components/MovieList/MovieListCardComponent";
import {MovieListBannedCardComponent} from "@/components/MovieList/MovieListBannedCardComponent";
import {MovieListPreloaderPage} from "@/pages/MovieListPreloaderPage";
import {usePagination} from "@/hooks/usePagination";
import {useSearchQuery} from "@/hooks/useSearchQuery";

export default function Home() {
  const [movies, setMovies] = useState<MovieShortened[] | null>(null)
  const {page} = usePagination();
  const {searchQuery} = useSearchQuery();

  const refreshMovies = useCallback(async (searchQuery: string, page: number) => {
    let newMovies: MovieShortened[];
    if (searchQuery === '') newMovies = await getMovieList(page);
    else newMovies = await getMovieListBySearch(searchQuery, page);
    setMovies(newMovies);
  }, [])

  useEffect(() => {
    refreshMovies(searchQuery, page).then()
  }, [page, refreshMovies, searchQuery])

  if (movies) {
    return (
        <div className='p-1 pt-18 w-full'>
          <div className='flex flex-wrap justify-around m-10'>
            {
              movies ? movies.map((value) =>
                  value.original_language === 'ru' ? <MovieListBannedCardComponent key={value.id}/> :
                      <MovieListCardComponent key={value.id} movie={value}/>) : 'loading...'
            }
          </div>

          <PaginationControllerComponent/>
        </div>
    );
  } else return <MovieListPreloaderPage/>
};