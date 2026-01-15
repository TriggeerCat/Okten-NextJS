import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback, useMemo} from "react";

export const useSearchQuery = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const searchQuery = useMemo(() => {
        return searchParams?.get('search') ?? '';
    }, [searchParams])

    const setSearchQuery = useCallback((newSearch?: string) => {
        const params = new URLSearchParams(searchParams?.toString());
        params.set('search', newSearch ?? '');

        router.replace(`${pathname}?${params.toString()}`);
    }, [router, pathname, searchParams])

    return {searchQuery, setSearchQuery}
}