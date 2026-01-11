'use client'

import {FC, useEffect, useState} from "react";
import {getOneMovie} from "@/services/api.service";
import {MovieFull} from "@/types/MovieFull";
import {FullPosterComponent} from "@/components/MoviePage/FullPosterComponent";
import {MoviePagePreloaderPage} from "@/pages/MoviePagePreloaderPage";
import {MoviePageTitleComponent} from "@/components/MoviePage/MoviePageTitleComponent";
import {VideoPreloader} from "@/components/Preloaders/VideoPreloader";
import {GenreFullComponent} from "@/components/MoviePage/GenreFullComponent";
import {DescriptionComponent} from "@/components/MoviePage/DescriptionComponent";
import {DogPage} from "@/pages/DogPage";

type PropsType = {
    params: { id: string }
}

export const MoviePageLayout: FC<PropsType> = ({params}) => {
    const [errorCheck, setErrorCheck] = useState<boolean>(false)
    const [movie, setMovie] = useState<MovieFull | null>(null)
    const {id} = params;

    const refreshMovie = async (id: string | undefined) => {
        const movie = await getOneMovie(id);
        if (movie.status === 404) setErrorCheck(true);
        else setMovie(movie);
    }

    useEffect(() => {
        refreshMovie(id).then();
    }, [id]);

    if (movie) return (
        <div className='pt-25 mx-25 mb-3 flex gap-10 m-auto'>
            <FullPosterComponent movie={movie}/>
            <div className='flex flex-col gap-4 w-240'>
                <MoviePageTitleComponent originalTitle={movie.original_title} title={movie.title}/>
                <VideoPreloader/>
                <GenreFullComponent genres={movie.genres}/>
                <DescriptionComponent tagline={movie.tagline} overview={movie.overview}/>
            </div>
        </div>
    );
    else return errorCheck ? <DogPage/> : <MoviePagePreloaderPage/>;
};