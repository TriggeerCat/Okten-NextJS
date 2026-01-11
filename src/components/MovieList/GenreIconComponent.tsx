import {FaSquare} from "react-icons/fa";
import {GENRE_ID_TO_ICON, isSupportedIconId} from "@/constants/GenreIdToIcon";
import {FC} from "react";

type PropsType = { id: number }

export const GenreIcon: FC<PropsType> = ({id}) => {
    const Icon = isSupportedIconId(id) ? GENRE_ID_TO_ICON[id] : FaSquare;
    return <Icon/>
}