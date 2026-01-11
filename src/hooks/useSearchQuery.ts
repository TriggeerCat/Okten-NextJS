import {useSearchParams} from "next/navigation";
import {useCallback, useMemo} from "react";

export const useSearchQuery = () => {
    const searchParams = useSearchParams();

    const searchQuery = useMemo(() => {
        return searchParams?.get('search') ?? '';
    }, [searchParams])

    const setSearchQuery = useCallback((newSearch?: string) => {
        const params = new URLSearchParams(searchParams?.toString());
        params.set('search', newSearch ?? '');
    }, [searchParams])

    return {searchQuery, setSearchQuery}
}