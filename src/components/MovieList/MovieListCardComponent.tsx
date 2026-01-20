    'use client'

import {MovieShortened} from "@/types/MovieShortened";
import {FC, useContext, useEffect, useState} from "react";
import Link from "next/link";
import {GenreContext} from "@/context/GenreContext";
import {PosterPreviewComponent} from "@/components/MovieList/PosterPreviewComponent";
import {MovieCardTitleComponent} from "@/components/MovieList/MovieCardTitleComponent";
import {GenreBadgeComponent} from "@/components/MovieList/GenreBadgeComponent";
import {RatingComponent} from "@/components/MovieList/RatingComponent";

type PropsType = { movie: MovieShortened }

export const MovieListCardComponent: FC<PropsType> = ({movie}) => {
    const [tint, setTint] = useState<boolean>(false)
    const {genres} = useContext(GenreContext);

    useEffect(() => {
        const shouldTint = genres.length > 0 && !movie.genre_ids.some(id => genres.includes(id));
        setTint(shouldTint);
    }, [genres, movie.genre_ids]);


    return (
        <Link href={'/info/' + movie.id}
              className={tint ? 'p-2 w-1/10 rounded-2xl flex flex-col justify-between opacity-40 z-[-1]' : 'p-2 w-1/10 hover:bg-neutral-700 rounded-2xl flex flex-col justify-between'}>
            <div className='flex flex-col gap-3'>
                <PosterPreviewComponent posterPath={movie.poster_path}/>
                <MovieCardTitleComponent title={movie.title} originalTitle={movie.original_title}/>
            </div>
            <div className='flex justify-between w-full mt-3'>
                <GenreBadgeComponent genreIds={movie.genre_ids}/>
                <RatingComponent rating={movie.vote_average}/>
            </div>
        </Link>
    );
};