import {VideoPreloader} from "../components/Preloaders/VideoPreloader.tsx";

export const MoviePagePreloaderPage = () => {
    return (
        <div className='p-25 flex gap-5'>
            <div className='w-85.5 rounded-2xl h-149 p-5 animate-pulse bg-neutral-600'/>
            <div className='w-240'>
                <div className='px-10 h-15 rounded-2xl text-6xl font-bold my-2 animate-pulse bg-neutral-600'/>
                <VideoPreloader/>
            </div>
        </div>
    );
};