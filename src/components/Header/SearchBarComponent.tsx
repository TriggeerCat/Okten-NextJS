import * as React from "react";
import {useCallback, useState} from "react";
import {useSearchQuery} from "@/hooks/useSearchQuery";

export const SearchBarComponent = () => {
    const {setSearchQuery} = useSearchQuery();
    const [inputValue, setInputValue] = useState<string>('')

    const handleInputEnterKey = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setSearchQuery(inputValue);
        }
    }, [setSearchQuery, inputValue]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    return (
        <input className='flex justify-between gap-3 bg-stone-800 px-10 py-2 rounded-full w-100'
               placeholder='🔎 Type something here (ex. Thunder)'
               onKeyDown={handleInputEnterKey}
               onChange={handleChange}
               value={inputValue}/>
    );
};