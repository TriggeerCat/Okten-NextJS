import {getOneMovie} from "@/services/api.service";
import {FullPosterComponent} from "@/components/MoviePage/FullPosterComponent";
import {MoviePageTitleComponent} from "@/components/MoviePage/MoviePageTitleComponent";
import {GenreFullComponent} from "@/components/MoviePage/GenreFullComponent";
import {DescriptionComponent} from "@/components/MoviePage/DescriptionComponent";
import {MovieFull} from "@/types/MovieFull";
import {VideoPreloader} from "@/components/Preloaders/VideoPreloader";

type Props = {
    params: Promise<{ id: string }>
}

export default async function MoviePage({ params }: Props) {
    const movie: MovieFull = await getOneMovie((await params).id);

    return (
        <div className='pt-25 mx-25 mb-3 flex gap-10 m-auto'>
            <FullPosterComponent movie={movie}/>
            <div className='flex flex-col gap-4 w-240'>
                <MoviePageTitleComponent
                    originalTitle={movie.original_title}
                    title={movie.title}
                />
                <VideoPreloader/>
                <GenreFullComponent genres={movie.genres}/>
                <DescriptionComponent
                    tagline={movie.tagline}
                    overview={movie.overview}
                />
            </div>
        </div>
    );
}
