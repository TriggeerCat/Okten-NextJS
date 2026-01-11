import {IconType} from "react-icons";
import {
    FaCar,
    FaHatWizard,
    FaHeart,
    FaLaughBeam,
    FaMap,
    FaQuestion,
    FaReact,
    FaSkull,
    FaTv
} from "react-icons/fa";
import {MdFamilyRestroom, MdMusicNote} from "react-icons/md";
import {GiCrimeSceneTape, GiJasonMask, GiRevolver, GiTank} from "react-icons/gi";
import {IoDocumentTextSharp} from "react-icons/io5";
import {LuDrama} from "react-icons/lu";
import {RiChatHistoryFill} from "react-icons/ri";
import {FaGun} from "react-icons/fa6";

const GENRES_MAP = {
    ACTION: 28,
    ADVENTURE: 12,
    ANIMATION: 16,
    COMEDY: 35,
    CRIME: 80,
    DOCUMENTARY: 99,
    DRAMA: 18,
    FAMILY: 10751,
    FANTASY: 14,
    HISTORY: 36,
    HORROR: 27,
    MUSIC: 10402,
    MYSTERY: 9648,
    ROMANCE: 10749,
    SCIENCE_FICTION: 878,
    THRILLER: 53,
    TV_MOVIE: 10770,
    WAR: 10752,
    WESTERN: 37
} as const;

type GenresMapToId = typeof GENRES_MAP[keyof typeof GENRES_MAP];

export const GENRE_ID_TO_ICON: Record<GenresMapToId, IconType> = {
    [GENRES_MAP.ACTION]: FaGun,
    [GENRES_MAP.ADVENTURE]: FaMap,
    [GENRES_MAP.ANIMATION]: FaCar,
    [GENRES_MAP.COMEDY]: FaLaughBeam,
    [GENRES_MAP.CRIME]: GiCrimeSceneTape,
    [GENRES_MAP.DOCUMENTARY]: IoDocumentTextSharp,
    [GENRES_MAP.DRAMA]: LuDrama,
    [GENRES_MAP.FAMILY]: MdFamilyRestroom,
    [GENRES_MAP.FANTASY]: FaHatWizard,
    [GENRES_MAP.HISTORY]: RiChatHistoryFill,
    [GENRES_MAP.HORROR]: GiJasonMask,
    [GENRES_MAP.MUSIC]: MdMusicNote,
    [GENRES_MAP.MYSTERY]: FaQuestion,
    [GENRES_MAP.ROMANCE]: FaHeart,
    [GENRES_MAP.SCIENCE_FICTION]: FaReact,
    [GENRES_MAP.THRILLER]: FaSkull,
    [GENRES_MAP.TV_MOVIE]: FaTv,
    [GENRES_MAP.WAR]: GiTank,
    [GENRES_MAP.WESTERN]: GiRevolver,
}

export const isSupportedIconId = (id: number): id is GenresMapToId => {
    return (Object.values(GENRES_MAP) as readonly number[]).includes(id)
}