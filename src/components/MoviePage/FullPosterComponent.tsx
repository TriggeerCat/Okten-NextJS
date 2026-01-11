import {FC} from "react";
import {MovieFull} from "@/types/MovieFull";
import {VoteComponent} from "@/components/MoviePage/VoteComponent";
import {ReleaseDateComponent} from "@/components/MoviePage/ReleaseDateComponent";
import {OriginCountryComponent} from "@/components/MoviePage/OriginCountryComponent";
import {BudgetComponent} from "@/components/MoviePage/BudgetComponent";

type PropsType = {
    movie: MovieFull
}

export const FullPosterComponent: FC<PropsType> = ({movie}) => {
    return (
        <div className='rounded-2xl bg-neutral-700 flex flex-col align-middle p-5 gap-3'>
            <img src={"https://image.tmdb.org/t/p/w342" + movie.poster_path} alt="POSTER_PLACEHOLDER"/>
            <VoteComponent voteCount={movie.vote_count} voteAverage={movie.vote_average}/>
            <ReleaseDateComponent releaseDate={movie.release_date}/>
            <OriginCountryComponent originCountry={movie.origin_country}/>
            <BudgetComponent budget={movie.budget} revenue={movie.revenue}/>
        </div>
    );//TODO
};