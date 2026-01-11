export const MovieListCardPreloader = () => {
    return (
        <div className='p-2 w-1/10 h-74.5  rounded-2xl flex flex-col justify-between'>
            <div className='flex flex-col gap-3'>
                <div className='overflow-hidden rounded-2xl h-50 animate-pulse bg-neutral-600'/>
                <div className='px-2 animate-pulse rounded-2xl h-5 bg-neutral-600'/>
            </div>
            <div className='flex justify-between w-full mt-2 rounded-2xl h-10 animate-pulse bg-neutral-600'/>
        </div>
    );
};