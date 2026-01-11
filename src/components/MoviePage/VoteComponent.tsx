import {FC} from "react";

type PropsType = {
    voteAverage: number,
    voteCount: number
}

export const VoteComponent: FC<PropsType> = ({voteAverage, voteCount}) => {
    return (
        <div className='text-center border-t-1 border-t-neutral-400 pt-2'>
            <div className='text-2xl font-bold'>
                Рейтинг: {voteAverage.toFixed(2)}/10
            </div>
            <div>
                (проголосувало {voteCount} осіб)
            </div>
        </div>
    );
};