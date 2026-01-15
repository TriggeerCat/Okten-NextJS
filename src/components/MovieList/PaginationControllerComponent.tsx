import {usePagination} from "@/hooks/usePagination";

export const PaginationControllerComponent = () => {
    const { page, setPage } = usePagination();

    return (
        <div className='w-full flex justify-around text-xl p-2'>
            <button className='size-10 border-2 border-stone-500 rounded-2xl' onClick={() => {
                const prevPage = page - 1;
                if (prevPage <= 0) return;
                setPage(prevPage);
            }}>{'<'}</button>

            <div>{page}/500</div>

            <button className='size-10 border-2 border-stone-500 rounded-2xl' onClick={() => {
                const nextPage = page + 1;
                if (nextPage > 500) return;
                setPage(nextPage);
            }}>{'>'}</button>
        </div>
    );
};