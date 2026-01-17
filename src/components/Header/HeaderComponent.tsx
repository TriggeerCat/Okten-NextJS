'use client'

import {HeaderTitleComponent} from "@/components/Header/HeaderTitleComponent";
import {SearchBarComponent} from "@/components/Header/SearchBarComponent";
import {UserInfoComponent} from "@/components/Header/UserInfoComponent";

export const HeaderComponent = () => {
    return (
        <div className='px-5 py-2 flex justify-between fixed bg-neutral-700 w-full'>
            <HeaderTitleComponent/>
            <SearchBarComponent/>
            <UserInfoComponent/>
        </div>
    );
};