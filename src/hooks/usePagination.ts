import {useSearchParams} from "next/navigation";
import {useCallback, useMemo} from "react";
import {useSearchQuery} from "@/hooks/useSearchQuery";

export const usePagination = () => {
    const searchParams = useSearchParams();
    const {searchQuery} = useSearchQuery();

    const page = useMemo(() => {
        const queryPage = parseInt(searchParams?.get('page') ?? '1');
        if (Number.isNaN(queryPage)) return 1;
        if (queryPage > 500) return 500;
        if (queryPage < 1) return 1;
        return queryPage;
    }, [searchParams])

    const setPage = useCallback((newPage?: number) => {
        const params = new URLSearchParams(searchParams?.toString());
        params.set('page', newPage ? newPage.toString() : '1');
        params.set('search', searchQuery ?? null);
    }, [searchQuery, searchParams])

    return {page, setPage: setPage}
}