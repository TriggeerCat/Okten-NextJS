import {FC} from "react";
import {numberTransformer} from "@/utils/numberTransformer";

type PropsType = {
    budget: number,
    revenue: number
}

export const BudgetComponent: FC<PropsType> = ({budget, revenue}) => {
    if (budget > 0 && revenue > 0)
        return (
            <div className='border-t-1 border-t-neutral-400 pt-2'>
                <p>Budget: {numberTransformer(budget)}</p>
                <p>Revenue: {numberTransformer(revenue)}</p>
            </div>
        );
    return null;
};