import Link from "next/link";
import {usePagination} from "@/hooks/usePagination";
import {useSearchQuery} from "@/hooks/useSearchQuery";
import {IoIosAirplane} from "react-icons/io";
import {useState} from "react";
import {GenreMenu} from "@/components/Header/GenreMenu";

export const HeaderTitleComponent = () => {
    const {setPage} = usePagination();
    const {setSearchQuery} = useSearchQuery();
    const [menu, setMenu] = useState<boolean>(false);
    const toggleMenu = () => setMenu(prevState => !prevState);

    const onClickHandler = () => {
        setPage();
        setSearchQuery();
    }

    return (
        <div className='flex justify-between gap-50'>
            <Link href='' onClick={onClickHandler} className='text-xl p-2'>
                <span className='text-teal-100'>TriggeerFilms</span>
                <span className='text-yellow-100'>.ua</span>
            </Link>

            <button onClick={toggleMenu} className='bg-red-500 rounded-xl p-2 flex justify-between items-center gap-1'>
                <IoIosAirplane/>
                <span>Browse Genres</span>
            </button>

            {menu && (
                <GenreMenu/>
            )}
        </div>
    );
};