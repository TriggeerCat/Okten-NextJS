import {getMovieList, getMovieListBySearch} from "@/services/api.service";
import {MovieListCardComponent} from "@/components/MovieList/MovieListCardComponent";
import {MovieListBannedCardComponent} from "@/components/MovieList/MovieListBannedCardComponent";
import {PaginationControllerComponent} from "@/components/MovieList/PaginationControllerComponent";
import {MovieShortened} from "@/types/MovieShortened";

type Props = {
    searchParams: Promise<{ page?: string; search?: string }>
}

export default async function Home({ searchParams }: Props) {
    const awaitedSearchParams = await searchParams;

    const page = awaitedSearchParams.page ?? '1';
    const search = awaitedSearchParams.search ?? '';

    const movies: MovieShortened[] = search
        ? await getMovieListBySearch(search, +page)
        : await getMovieList(+page);

    return (
        <div className='p-1 pt-18 w-full'>
            <div className='flex flex-wrap justify-around m-10'>
                {movies.map(movie =>
                    movie.original_language === 'ru'
                        ? <MovieListBannedCardComponent key={movie.id}/>
                        : <MovieListCardComponent key={movie.id} movie={movie}/>
                )}
            </div>

            <PaginationControllerComponent/>
        </div>
    );
}
